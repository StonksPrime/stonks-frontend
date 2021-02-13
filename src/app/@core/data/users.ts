import { Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  token?: string;
  refreshToken?: string;
  full_name: string;
  first_name: string;
  last_name: string;
  picture: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract login(username: string, password: string): Observable<User>;
  abstract refreshToken(): Observable<User>;
  abstract logout();
  abstract getLoggedInUser(): Observable<User>;
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}
