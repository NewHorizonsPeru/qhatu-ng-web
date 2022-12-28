import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReCaptchaService {
  constructor(private httpClient: HttpClient) {}

  validateCaptcha(token: string) {
    return this.httpClient.post(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        secret: '6LfDuLEjAAAAALfEXjh4KJvQFxjJp5hOoAtrs0Gp',
        response: token,
        remoteip: 'localhost',
      }
    );
  }
}
