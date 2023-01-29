import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isSignedIn = false;
  user: any;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router) { }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isSignedIn = true;
        this.user = res.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('/');
      });
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.isSignedIn = true;
      this.user = res.user;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigateByUrl('/');
    });;
  }

  signOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isSignedIn = false;
    this.router.navigateByUrl('/');
  }
}
