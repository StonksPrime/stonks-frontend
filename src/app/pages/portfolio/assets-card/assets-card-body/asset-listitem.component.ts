import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { map, takeWhile } from 'rxjs/operators';

import { AssetList } from '../../../../@core/data/asset-list';
import { AssetPrice, AssetPriceData } from '../../../../@core/data/asset-price';

@Component({
  selector: 'asset-card-body',
  styleUrls: ['./asset-listitem.component.scss'],
  templateUrl: './asset-listitem.component.html',
})
export class AssetListItemComponent implements OnDestroy {

  private alive = true;

  @Input() frontCardData: AssetList[];

  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private assetPriceService: AssetPriceData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  trackByDate(_, item) {
    return item.date;
  }

  getPrice(ticker: string) {
    const price = this.assetPriceService.getAssetPrice(ticker)
      .subscribe((response: AssetPrice) => {
        // console.log(response);
        return response;
      });
    return price;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
