import { Component, OnDestroy } from '@angular/core';
import { StockList, StockListData } from '../../../@core/data/stock-list';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'assets-card',
  templateUrl: './assets-card.component.html',
})
export class AssetsCardComponent implements OnDestroy {

  private alive = true;

  stockListData: StockList;
  cryptoListData: StockList;
  ETFListData: StockList;

  assetType: string = 'stock';
  revealed = true;
  stockType = 'Stocks';
  ETFType = 'Exchange Traded Funds';
  cryptoType = 'Crypto Assets';

  constructor(private stockListService: StockListData,
              ) {
    this.getAssetsData('stock');
    this.getAssetsData('ETF');
    this.getAssetsData('crypto');
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  getAssetsData(assetType: string) {
    this.stockListService.getStockListData(assetType)
      .pipe(takeWhile(() => this.alive))
      .subscribe(assetListData => {
        switch (assetType) {
          case 'stock':
            this.stockListData = assetListData;
            break;
          case 'ETF':
            this.ETFListData = assetListData;
            break;
          case 'crypto':
            this.cryptoListData = assetListData;
            break;
          default:
            break;
        }
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
