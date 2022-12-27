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

  getNumbers() {
    const onClick$ = fromEvent(document, 'click');
    onClick$.subscribe({
      next: (event: any) => {
        console.log(event.key);
      },
    });

    const observableOfNumbers$ = new Observable((sub) => {
      sub.next(24);
      sub.next(30);
      sub.next(100);
      sub.next(299);
      sub.next(35);
      sub.next(3330);

      sub.complete();
      sub.next(25);
    });

    return observableOfNumbers$;
  }
}
