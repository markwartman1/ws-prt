import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(this.url + '/auth/username', {
      username: username
  });
  }

  /**
   * A third argument used to be passed that was essentially options...
   * it used to be : { withCredential: true }...
   * what this did was keep the cookie between page-refreshe's
   * This was taken out to how HTTP Interceptor approach 
   */
  signup(credentials: 
    { 
      username: string,
      password: string,
      passwordConfirmation: string
    }) {
    return this.http.post<{ username: string }>(this.url + '/auth/signup', credentials)
      .pipe(tap( () => this.signedin$.next(true)));
  }

  /**
   * A third argument used to be passed that was essentially options...
   * it used to be : { withCredential: true }...
   * what this did was keep the cookie between page-refreshe's 
   * This was taken out to how HTTP Interceptor approach
   */
  checkAuth() {
    return this.http.get<{authenticated: boolean, username: string}>(this.url + '/auth/signedin')
      .pipe(tap(({authenticated}) => {
        this.signedin$.next(authenticated);
      }));
  }

  signout() {
    return this.http.post(this.url + '/auth/signout', {})
      .pipe(tap(() => this.signedin$.next(false)));
  }

  signin(credentials: {username: string, password: string}) {
    return this.http.post(this.url + '/auth/signin', credentials)
      .pipe(tap(() => {
        this.signedin$.next(true);
      }));
  }
}
