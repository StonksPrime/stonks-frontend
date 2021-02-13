import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, User, UserData } from '../data/users';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService extends UserData {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    super();
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private time: Date = new Date;

  private users = {
    nick: { id: 100, username: 'njones', full_name: 'Nick Jones', first_name: 'Nick', last_name: 'Jones', picture: 'assets/images/nick.png' },
    eva: { id: 101, username: 'njones', full_name: 'Eva Moor', first_name: 'Eva', last_name: 'Moor', picture: 'assets/images/eva.png' },
    jack: { id: 102, username: 'njones', full_name: 'Nick Jones', first_name: 'Jack', last_name: 'Williams', picture: 'assets/images/jack.png' },
    lee: { id: 103, username: 'njones', full_name: 'Nick Jones', first_name: 'Lee', last_name: 'Wong', picture: 'assets/images/lee.png' },
    alan: { id: 104, username: 'njones', full_name: 'Nick Jones', first_name: 'Alan', last_name: 'Thompson', picture: 'assets/images/alan.png' },
    kate: { id: 105, username: 'njones', full_name: 'Nick Jones', first_name: 'Kate', last_name: 'Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },
    { user: this.users.jack, type: this.types.mobile },
    { user: this.users.lee, type: this.types.mobile },
    { user: this.users.alan, type: this.types.home },
    { user: this.users.kate, type: this.types.work },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12)},
    { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45)},
    { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29)},
    { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24)},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45)},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42)},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31)},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0)},
  ];

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`${environment.apiUrl}/${environment.jwtLogin}`, { username, password })
          .pipe(
              map(response => {
                  // login successful if there's a jwt token in the response
                  let currentUser: User;
                  if (response.access) {
                      // store user details and jwt token in local storage to keep user logged in between pages
                      currentUser = jwt_decode(response.access);
                      currentUser.username = username;
                      currentUser.first_name = response.first_name;
                      currentUser.last_name = response.last_name;
                      currentUser.full_name = response.first_name + ' ' + response.last_name;
                      currentUser.picture = response.picture;
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
                  let currentUser: User;
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

  getLoggedInUser(): Observable<User> {

    return this.currentUser;
    // return observableOf(this.users.eva);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
