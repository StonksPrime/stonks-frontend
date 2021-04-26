import { NgModule } from '@angular/core';
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

import { AssetsCardComponent } from './assets-card/assets-card.component';
import { AssetListItemComponent } from './assets-card/assets-card-body/asset-listitem.component';
import { AssetCardsHeaderComponent } from './assets-card/assets-card-header/asset-cards-header.component';

import { ThemeModule } from '../../@theme/theme.module';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { ExploreStockComponent } from './stock/explore-stock.component';
import { ExploreETFComponent } from './etf/explore-etf.component';
import { ExploreCryptoComponent } from './crypto/explore-crypto.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';

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
    ExploreRoutingModule,
  ],
  declarations: [
    ExploreComponent,
    ExploreStockComponent,
    ExploreETFComponent,
    ExploreCryptoComponent,
    AssetsCardComponent,
    AssetListItemComponent,
    AssetCardsHeaderComponent,
    AssetDetailComponent,
  ],
})
export class ExploreModule { }
