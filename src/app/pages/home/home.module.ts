import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
