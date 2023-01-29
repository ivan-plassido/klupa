import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private dialogRef: MatDialogRef<SignInDialogComponent>
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
    await this.firebase.signIn(this.f['email'].value, this.f['password'].value)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/wrong-password":
          case "auth/user-not-found": {
            this.errorMessage = "Wrong credentials";
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
