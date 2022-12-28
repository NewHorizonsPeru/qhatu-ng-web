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
import { ProductService } from '../core/services/product.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
    private router: Router,
    private tokenService: TokenService
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
      reCaptcha: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  onSignIn(userToLogin: any) {
    this.securityService.signIn(userToLogin).subscribe({
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
    });
  }

  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
}
