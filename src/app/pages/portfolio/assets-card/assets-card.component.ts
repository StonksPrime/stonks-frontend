import { Component, Input, OnDestroy } from '@angular/core';
import { AssetList, AssetListData } from '../../../@core/data/asset-list';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'assets-card',
  templateUrl: './assets-card.component.html',
})
export class AssetsCardComponent implements OnDestroy {

  private alive = true;

  @Input() assetType: String;
  @Input() assetListData: AssetList[];

  constructor( ) {
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
