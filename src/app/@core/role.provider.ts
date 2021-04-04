import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbRoleProvider } from '@nebular/security';
import { NbAuthOAuth2JWTToken, NbAuthService } from '@nebular/auth';
import { User, UserData } from './data/users';

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
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthOAuth2JWTToken) => {
          try {
            const payload = token.getAccessTokenPayload();
            // return !!(token.isValid() && payload && payload['role']) ? this.getLowerCaseRoles(payload['role']) : 'user';
            return !!(token.isValid() && payload ) ? 'user' : 'guest';
          } catch (ex) {
            return 'guest';
          }
        }),
      );
  }
}
