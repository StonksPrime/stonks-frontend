import { NgModule } from '@angular/core';
import {PortfolioComponent} from './portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbAccordionModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';

import { AssetsCardComponent } from './assets-card/assets-card.component';
import { PeriodBarComponent } from './assets-card/assets-card-body/period-bar/period-bar.component';
import { AssetListItemComponent } from './assets-card/assets-card-body/asset-listitem.component';
import { AssetCardsHeaderComponent } from './assets-card/assets-card-header/asset-cards-header.component';

import { ThemeModule } from '../../@theme/theme.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioStockComponent } from './stock/portfolio-stock.component';
import { PortfolioAllComponent } from './all-assets/portfolio-all.component';
import { PortfolioETFComponent } from './etf/portfolio-etf.component';
import { PortfolioCryptoComponent } from './crypto/portfolio-crypto.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    NbAccordionModule,
    PortfolioRoutingModule,
  ],
  declarations: [
    PortfolioComponent,
    PortfolioStockComponent,
    PortfolioAllComponent,
    PortfolioETFComponent,
    PortfolioCryptoComponent,
    AssetsCardComponent,
    AssetListItemComponent,
    PeriodBarComponent,
    AssetCardsHeaderComponent,
  ],
})
export class PortfolioModule { }
