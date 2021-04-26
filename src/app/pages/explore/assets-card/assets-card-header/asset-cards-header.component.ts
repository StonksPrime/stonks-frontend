import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'asset-cards-header',
  styleUrls: ['./asset-cards-header.component.scss'],
  templateUrl: './asset-cards-header.component.html',
})
export class AssetCardsHeaderComponent implements OnDestroy {
  private alive = true;


  @Input() type: string = 'Stock';
  @Output() messageEvent = new EventEmitter<string>();

  types: string[] = ['ETF', 'Stock', 'Crypto'];
  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  refreshAssets() {
    this.messageEvent.emit('Hello');
  }

  changePeriod(period: string): void {
    // this.type = period;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
