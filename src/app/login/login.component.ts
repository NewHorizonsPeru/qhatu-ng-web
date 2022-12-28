import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SecurityService } from '../core/services/security.service';
import { TokenService } from '../core/services/token.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ReCaptchaService } from '../core/services/recaptcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  token: string | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
    private router: Router,
    private recaptchaV3Service: ReCaptchaV3Service,
    private tokenService: TokenService,
    private recaptchaService: ReCaptchaService
  ) {
    this.loginFormGroup = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ])
      ),
    });
  }

  onSignIn(userToLogin: any) {
    console.log(userToLogin);
    this.recaptchaV3Service.execute('').subscribe((token) => {
      console.log(token);
      this.recaptchaService.validateCaptcha(token).subscribe({
        next: (value) => {
          console.log(value);
        },
      });
    });

    /**this.securityService.signIn(userToLogin).subscribe({
      next: (value: any) => {
        if (value) {
          this.tokenService.saveToken(value.token);
          this.tokenService.saveCurrentUser(value);
          this.router.navigateByUrl('/products');
        }
      },
      complete: () => {},
      error: (error) => {
        if (error && error.status === 422) {
          this.matSnackBar.open('Usuario y/o contraseña incorrecto', 'OK', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
      },
    });**/
  }

  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
}
