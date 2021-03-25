import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlabLoginComponent } from './login/login.component';
import { NbAuthModule } from '@nebular/auth';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule,
} from '@nebular/theme';

import { SlabAuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbAlertModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    SlabAuthRoutingModule,
    NbLayoutModule,

    NbAuthModule,
  ],
  declarations: [
    AuthComponent,
    SlabLoginComponent,
  ],
})
export class SlabAuthModule { }
