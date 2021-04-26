import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AssetList, AssetListData } from '../../../@core/data/asset-list';
import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'asset-detail',
  templateUrl: './asset-detail.component.html',
})
export class AssetDetailComponent implements OnInit, OnDestroy {

  private alive = true;
  ticker: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ticker = this.route.snapshot.paramMap.get('ticker');
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
