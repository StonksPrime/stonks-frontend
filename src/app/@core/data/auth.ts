import { Observable } from 'rxjs';
import { User } from './users';

export abstract class AuthenticationService {
  abstract login(username: string, password: string): Observable<User>;
  abstract refreshToken(): Observable<User>;
  abstract logout();
}
