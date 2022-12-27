import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SecurityService } from '../core/services/security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  newUserFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService
  ) {
    this.newUserFormGroup = this.formBuilder.group({
      firstName: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      lastName: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      username: new FormControl(
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
          Validators.minLength(10),
          Validators.maxLength(20),
        ])
      ),
      role: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  onNewUser(formGroup: any) {
    console.log(formGroup);
    this.securityService.signUp(formGroup).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
