import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { UserAuth } from '../data/auth';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<UserAuth>;
    public currentUser: Observable<UserAuth>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserAuth>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserAuth {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/${environment.jwtLogin}`, { username, password })
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    let currentUser: UserAuth;
                    if (response.access) {
                        // store user details and jwt token in local storage to keep user logged in between pages
                        currentUser = jwt_decode(response.access);
                        currentUser.token = response.access;
                        currentUser.refreshToken = response.refresh;
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        this.currentUserSubject.next(currentUser);
                    }
                    return currentUser;
                }),
                // catchError(this.handleError)
            );
            // .subscribe( data => console.log('data'), error => console.log('error'))
    }

    refreshToken() {
        const refreshToken = this.currentUserValue.refreshToken;
        return this.http.post<any>(`${environment.apiUrl}/${environment.jwtRefresh}`, { 'refresh': refreshToken })
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    let currentUser: UserAuth;
                    if (response.access) {
                        // store user details and jwt token in local storage to keep user logged in between pages
                        currentUser = jwt_decode(response.access);
                        currentUser.token = response.access;
                        currentUser.refreshToken = response.refresh;
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        this.currentUserSubject.next(currentUser);
                    }
                    return currentUser;
                }),
            );
            // .subscribe( data => console.log('data'), error => console.warn(error))
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.statusText);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error.text}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}
