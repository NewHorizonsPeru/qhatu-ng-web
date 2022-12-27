import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private httpClient: HttpClient) {}
  signUp(userToRegister: any) {
    return this.httpClient.post(
      `http://localhost:2705/api/v1/security/signUp`,
      userToRegister
    );
  }
}
