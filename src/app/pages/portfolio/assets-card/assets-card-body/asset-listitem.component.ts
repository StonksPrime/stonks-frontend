import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { StockList } from '../../../../@core/data/stock-list';

@Component({
  selector: 'asset-card',
  styleUrls: ['./asset-listitem.component.scss'],
  templateUrl: './asset-listitem.component.html',
})
export class AssetListItemComponent implements OnDestroy {

  private alive = true;

  @Input() frontCardData: StockList;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
