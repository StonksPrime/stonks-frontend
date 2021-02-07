import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component'
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
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }
