import { Component, OnInit } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';
import { NbMenuItem } from '@nebular/theme';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import {  ChangeDetectorRef } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;
  constructor(private accessChecker: NbAccessChecker,
              public translate: TranslateService,
              private cdr: ChangeDetectorRef,
    ) {
      this.translate.onLangChange.subscribe((params: LangChangeEvent) => { this.translateMenuItems(); });
      this.translate.onLangChange.subscribe((params: LangChangeEvent) => { this.cdr.detectChanges(); });
  }

  ngOnInit() {
    this.authMenuItems();
    this.translateMenuItems();
  }

  authMenuItems() {
    this.menu.forEach(item => {
      this.authMenuItem(item);
    });
  }

  translateMenuItems() {
    this.menu.forEach(item => {
        this.translate.get('MENU.' + item.data.translationId).subscribe((res: string) => {
          item.title = res;
        });
    });
  }

  authMenuItem(menuItem: NbMenuItem) {
    if (menuItem.data && menuItem.data['permission'] && menuItem.data['resource']) {
      this.accessChecker.isGranted(menuItem.data['permission'], menuItem.data['resource']).subscribe(granted => {
        menuItem.hidden = !granted;
      });
    } else {
      menuItem.hidden = true;
    }
    if (!menuItem.hidden && menuItem.children != null) {
      menuItem.children.forEach(item => {
        if (item.data && item.data['permission'] && item.data['resource']) {
          this.accessChecker.isGranted(item.data['permission'], item.data['resource']).subscribe(granted => {
            item.hidden = !granted;
          });
        } else {
          // if child item do not config any `data.permission` and `data.resource` just inherit parent item's config
          item.hidden = menuItem.hidden;
        }
      });
    }
  }

}
