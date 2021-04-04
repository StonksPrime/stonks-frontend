import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbRoleProvider } from '@nebular/security';
import { NbAuthOAuth2JWTToken, NbAuthService } from '@nebular/auth';
import { User, UserData } from './data/users';
import { of } from 'rxjs';

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  getLowerCaseRoles(roles: any): string | string[] {
    if (Array.isArray(roles)) {
      roles = roles.map(element => {
        return element.toLowerCase();
      });
    } else {
      roles = roles.toLowerCase();
    }
    return roles;
  }

  getRole(): Observable<string | string[]> {
    let result = 'guest';
    this.authService.onTokenChange()
      .subscribe((token: NbAuthOAuth2JWTToken) => {
          try {
            const payload = token.getPayload();
            // return !!(token.isValid() && payload && payload['role']) ? this.getLowerCaseRoles(payload['role']) : 'user';
            result = !!(token.isValid() && payload ) ? 'user' : 'guest';
          } catch (ex) {
            result = 'guest';
          }
        });
    return of(result);
  }
}
