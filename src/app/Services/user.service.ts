import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  getallUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.ApiLink}/User`);
  }
  getUser(Uemail: string): Observable<User> {
    return this.http.get<User>(`${environment.ApiLink}/User/${Uemail}`);
  }
  addUsers(Users: User) {
    return this.http.post(
      `${environment.ApiLink}/User`,
      JSON.stringify(Users),
      this.httpOptions
    );
  }
  updateUser(uEmail: string, user: User) {
    return this.http.put(
      `${environment.ApiLink}/User/${uEmail}`,
      JSON.stringify(user),
      this.httpOptions
    );
  }
  deleteUser(uEmail: string) {
    return this.http.delete(`${environment.ApiLink}/User/${uEmail}`);
  }
}
