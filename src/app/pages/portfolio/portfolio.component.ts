import { Component, OnInit} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { AssetList, AssetListData } from '../../@core/data/asset-list';

@Component({
  selector: 'slab-portfolio',
  template: `
    <router-outlet></router-outlet>
  `,
})

export class PortfolioComponent implements OnInit {

  private alive = true;

  stockListData: AssetList[];
  cryptoListData: AssetList[];
  ETFListData: AssetList[];

  assetType: string = 'stock';
  revealed = true;
  stockType = 'Stock';
  ETFType = 'Exchange Traded Funds';
  cryptoType = 'Crypto Assets';

  constructor( private assetListService: AssetListData ) {
    this.getAssetsData('stock');
    this.getAssetsData('ETF');
    this.getAssetsData('crypto');
  }

  ngOnInit() {

  }

  getAssetsData(assetType: string) {
    this.assetListService.getAssetListData(assetType)
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
}
