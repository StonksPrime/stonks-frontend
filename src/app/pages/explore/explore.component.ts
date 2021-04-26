import { Component, OnInit} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { AssetList, AssetListData } from '../../@core/data/asset-list';

@Component({
  selector: 'slab-explore',
  template: `
    <router-outlet></router-outlet>
  `,
})

export class ExploreComponent implements OnInit {

  private alive = true;

  stockListData: AssetList[];
  cryptoListData: AssetList[];
  ETFListData: AssetList[];

  assetType: string = 'stock';
  revealed = true;
  stockType = 'Stock';
  ETFType = 'Exchange Traded Funds';
  cryptoType = 'Crypto Assets';

  constructor( ) {

  }

  ngOnInit() {

  }

}
