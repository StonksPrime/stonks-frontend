import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { User, UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NbAuthOAuth2JWTToken, NbAuthService } from '@nebular/auth';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: {};

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile', data: { id: 'profile'} }, { title: 'Log out', data: { id: 'logout'} } ];

  strategy: string = '';

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private authService: NbAuthService,
              private themeService: NbThemeService,
              private router: Router,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              public translate: TranslateService,
              private cdr: ChangeDetectorRef) {
                this.translate.onLangChange.subscribe((params: LangChangeEvent) => {
                  this.cdr.detectChanges();
                  this.refreshLanguage();
                });
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.refreshLanguage();
    this.authService.onTokenChange()
      .subscribe((token: NbAuthOAuth2JWTToken) => {
        if (token.isValid()) {
          const username = token.getAccessTokenPayload().username; // here we receive a payload from the token and assigns it to our `user` variable
          this.userService.getUserByUsername(username).subscribe((userData: User) => {
            this.user = userData;
          });
        } else {
          this.user = {};
        }
      });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

    this.menuService.onItemClick()
      .pipe(
        // filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { data: { id} } }) => id),
      )
      .subscribe(id => {
        if (id === 'logout') {
          this.router.navigate(['pages/auth/logout']);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  selectLanguage(lang: string) {
    this.translate.use(lang);
  }

  refreshLanguage() {
    this.translate.get('HEADER.profile').subscribe((res: string) => {
      this.userMenu[0].title = res; });
    this.translate.get('HEADER.logout').subscribe((res: string) => {
      this.userMenu[1].title = res; });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  navigateLogin() {
    this.router.navigate(['pages/auth/login']);
    return false;
  }
}
