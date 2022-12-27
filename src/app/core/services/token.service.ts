import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  clear(): void {
    localStorage.clear();
  }

  saveToken(token: string): void {
    localStorage.removeItem(environment.webStorage.tokenKey);
    localStorage.setItem(environment.webStorage.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(environment.webStorage.tokenKey);
  }

  saveCurrentUser(user: any): void {
    localStorage.removeItem(environment.webStorage.userKey);
    localStorage.setItem(environment.webStorage.userKey, JSON.stringify(user));
  }

  getUser() {
    const currentUser = localStorage.getItem(environment.webStorage.userKey);
    return currentUser !== null ? JSON.parse(currentUser) : undefined;
  }
}
