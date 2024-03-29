import { Component } from '@angular/core';

@Component({
  selector: 'slab-components',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>
        <p class="title">Authentication</p>
      </nb-card-header>
      <nb-card-body>
        <nb-auth-block>
          <router-outlet></router-outlet>
        </nb-auth-block>
      </nb-card-body>
    </nb-card>
  `,
})
export class AuthComponent {
}
