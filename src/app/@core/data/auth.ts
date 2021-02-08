import { Observable } from 'rxjs';

  
  export abstract class AuthenticationService {
    abstract login(username: string, password: string): Observable<any[]>;
    abstract refreshToken(): Observable<any[]>;
    abstract logout();
  }
  
  ﻿export class UserAuth {
    id: number;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    token?: string;
    refreshToken?: string;
  }