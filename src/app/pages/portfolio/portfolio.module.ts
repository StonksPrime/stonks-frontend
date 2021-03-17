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

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    NgxEchartsModule,
    NbAccordionModule,
  ],
  declarations: [
    PortfolioComponent,
    AssetsCardComponent,
    AssetListItemComponent,
    PeriodBarComponent,
    AssetCardsHeaderComponent,
  ],
})
export class PortfolioModule { }
