import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SecurityService } from '../core/services/security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('modalTemplate')
  modalTemplateRef!: TemplateRef<any>;
  newUserFormGroup: FormGroup;
  roles: any;
  matDialogMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private matDialog: MatDialog,
    private router: Router
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
  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.securityService.getRoles().subscribe({
      next: (values: any) => {
        this.roles = values;
      },
      complete: () => {
        console.log('Observable Complete.');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onNewUser(formGroup: any) {
    this.securityService.signUp(formGroup).subscribe({
      next: (response) => {
        if (response) {
          this.matDialogMessage = 'Usuario registrado correctamente.';
          this.openMatDialog(true);
        }
      },
      error: (error) => {
        console.log(error);
        if (error && error.status === 404) {
          this.matDialogMessage =
            'El correo ingresado ya se encuentra registado, intente con otro.';
          this.openMatDialog();
        }
      },
    });
  }

  openMatDialog(success = false) {
    const currentMatDialog = this.matDialog.open(this.modalTemplateRef);
    if (success) {
      currentMatDialog.afterClosed().subscribe({
        next: () => {
          this.router.navigateByUrl('/login');
        },
      });
    }
  }
}
