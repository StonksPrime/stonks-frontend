import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioAllComponent } from './all-assets/portfolio-all.component';
import { PortfolioCryptoComponent } from './crypto/portfolio-crypto.component';
import { PortfolioETFComponent } from './etf/portfolio-etf.component';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioStockComponent } from './stock/portfolio-stock.component';

const routes: Routes = [{
  path: '',
  component: PortfolioComponent,
  children: [
    {
      path: 'all',
      component: PortfolioAllComponent,
    },
    {
      path: 'stock',
      component: PortfolioStockComponent,
    },
    {
      path: 'etf',
      component: PortfolioETFComponent,
    },
    {
      path: 'crypto',
      component: PortfolioCryptoComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {
}
