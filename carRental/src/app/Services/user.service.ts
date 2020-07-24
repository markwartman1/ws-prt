import { Injectable } from '@angular/core';
import { Users } from "../Models/Users";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private usersUrl: string = 'api/users';

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }
}
