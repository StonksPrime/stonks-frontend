import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AssetList, AssetListData } from '../../../@core/data/asset-list';
import { first, map, takeWhile } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AssetYahoo, AssetYahooData } from '../../../@core/data/asset-yahoo';

@Component({
  selector: 'asset-detail',
  templateUrl: './asset-detail.component.html',
})
export class AssetDetailComponent implements OnInit, OnDestroy {

  private alive = true;
  name: string;
  ticker: string;
  price: string;
  volume: string;
  marketCap: string;
  lastDate: string;
  minSession: string;
  maxSession: string;
  open: string;
  close: string;
  deltaNum: string;
  deltaPer: string;
  currency: string;
  constructor(private route: ActivatedRoute, private assetYahooService: AssetYahooData) {
  }

  ngOnInit(): void {
    this.ticker = this.route.snapshot.paramMap.get('ticker').toUpperCase();
    this.assetYahooService.getAssetYahoo(this.ticker)
    .pipe(first())
    .subscribe((response) => {
      this.name = response.longName;
      this.price = response.regularMarketPrice;
      this.volume = response.regularMarketVolume;
      this.marketCap = response.marketCap;
      this.lastDate = response.regularMarketTime;
      this.minSession = response.regularMarketDayLow;
      this.maxSession = response.regularMarketDayHigh;
      this.open = response.regularMarketOpen;
      this.close = response.regularMarketPreviousClose;
      this.deltaNum = response.regularMarketChange;
      this.deltaPer = response.regularMarketChangePercent;
      this.currency = response.currency;
    });
    // this.setTickerData(this, this.ticker);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
