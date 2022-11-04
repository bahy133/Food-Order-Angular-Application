import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  Login(email: string) {
    localStorage.setItem('token', email);
  }
  get isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }
  Logout() {
    localStorage.removeItem('token');
  }
}
