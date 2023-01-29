import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss']
})
export class SignUpDialogComponent {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private dialogRef: MatDialogRef<SignUpDialogComponent>
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }


  async onSubmit() {
    this.submitted = true;
    this.loading = true;
    await this.firebase.signUp(this.f['email'].value, this.f['password'].value)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email": {
            this.errorMessage = "Email format is invalid";
            break;
          }
          case "auth/email-already-in-use": {
            this.errorMessage = "Email address is already in use";
            break;
          }
          case "auth/weak-password": {
            this.errorMessage = "Password is too short";
            break;
          }
          default: {
            this.errorMessage = "Unexpected Error";
            break;
          }
        }
      });
    this.loading = false;
    if (this.firebase.isSignedIn) {
      this.dialogRef.close();
    };
  }
}
