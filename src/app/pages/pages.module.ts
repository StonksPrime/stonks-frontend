import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SlabAuthModule} from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ExploreModule } from './explore/explore.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    SlabAuthModule,
    HomeModule,
    PortfolioModule,
    ExploreModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
