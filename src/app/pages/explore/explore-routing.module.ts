import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { ExploreCryptoComponent } from './crypto/explore-crypto.component';
import { ExploreETFComponent } from './etf/explore-etf.component';
import { ExploreComponent } from './explore.component';
import { ExploreStockComponent } from './stock/explore-stock.component';

const routes: Routes = [{
  path: '',
  component: ExploreComponent,
  children: [
    {
      path: 'stock',
      component: ExploreStockComponent,
    },
    {
      path: 'etf',
      component: ExploreETFComponent,
    },
    {
      path: 'crypto',
      component: ExploreCryptoComponent,
    },
    {
      path: ':ticker',
      component: AssetDetailComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {
}
