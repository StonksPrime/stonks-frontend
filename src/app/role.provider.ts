import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbRoleProvider } from '@nebular/security';
import { User, UserData } from './@core/data/users';

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authService: UserData) {
  }

  getRole(): Observable<string> {
    return this.authService.getLoggedInUser()
      .pipe(
        map((user: User) => {
          return (user != null && user.username) ? 'user' : 'guest';
        }),
      );
  }
}
