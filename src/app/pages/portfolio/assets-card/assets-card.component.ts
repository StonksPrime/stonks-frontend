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
  period: string = 'week';
  revealed = true;
  assetType = 'Stocks';

  constructor(private trafficListService: StockListData,
              ) {
    this.getTrafficFrontCardData(this.period);
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;

    this.getTrafficFrontCardData(value);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  getTrafficFrontCardData(period: string) {
    this.trafficListService.getStockListData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(stockListData => {
        this.stockListData = stockListData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
