import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private httpClient: HttpClient) {}
  signUp(userToRegister: any) {
    return this.httpClient.post(
      `${environment.apiQhatu.baseUrl}${environment.apiQhatu.signUpPath}`,
      userToRegister
    );
  }

  getRoles() {
    return this.httpClient.get(
      `${environment.apiQhatu.baseUrl}${environment.apiQhatu.getRoles}`
    );
  }
}
