import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { first, map, takeWhile } from 'rxjs/operators';

import { AssetList } from '../../../../@core/data/asset-list';
import { AssetPrice, AssetPriceData } from '../../../../@core/data/asset-price';

@Component({
  selector: 'asset-card-body',
  styleUrls: ['./asset-listitem.component.scss'],
  templateUrl: './asset-listitem.component.html',
})
export class AssetListItemComponent implements OnDestroy, OnInit {

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
  ngOnInit(): void {
    this.updatePrices();
  }

  trackByDate(_, item) {
    return item.date;
  }

  updatePrices() {
    this.frontCardData.forEach(element => {
      this.assetPriceService.getAssetPrice(element.ticker)
      .pipe(first())
      .subscribe((response) => {
        element.value = response.c;
      });
      // element.value = this.getPrice(element.ticker);
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
