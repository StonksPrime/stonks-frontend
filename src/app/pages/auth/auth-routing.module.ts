import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlabLoginComponent } from './login/login.component';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: '',
            component: SlabLoginComponent,
          },
          {
            path: 'login',
            component: SlabLoginComponent,
          },
          {
            path: 'register',
            component: NbRegisterComponent,
          },
          {
            path: 'logout',
            component: NbLogoutComponent,
          },
          {
            path: 'request-password',
            component: NbRequestPasswordComponent,
          },
          {
            path: 'reset-password',
            component: NbResetPasswordComponent,
          },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlabAuthRoutingModule {
}
