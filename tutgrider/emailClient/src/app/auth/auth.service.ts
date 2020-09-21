import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(
    private http: HttpClient
  ) { }

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(this.url + '/auth/username', {
      username: username
  });
  }

  signup(credentials: 
    { 
      username: string,
      password: string,
      passwordConfirmation: string
    }) {
    return this.http.post<{ username: string }>(this.url + '/auth/signup', credentials)
      .pipe(tap( () => this.signedin$.next(true)));
  }
}
