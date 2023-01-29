import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { SignInDialogComponent } from './components/auth/sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './components/auth/sign-up-dialog/sign-up-dialog.component';
import { Source } from './enums/Source';
import { FirebaseService } from './services/firebase.service';
import { SourceService } from './services/source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'klupa-frontend';
  loading = true;
  showSources = false;
  isSourceOpen = false;
  sources: typeof Source = Source;

  constructor(
    private router: Router,
    private sourceService: SourceService,
    private firebaseService: FirebaseService,
    private dialog: MatDialog) {

    this.router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    })
  }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.firebaseService.isSignedIn = true;
    }
  }

  get isSignedIn() {
    return this.firebaseService.isSignedIn;
  }

  get user(): any | null {
    const storedUser = localStorage.getItem('user');
    const user = storedUser !== null ? JSON.parse(storedUser) : this.firebaseService.user;
    return user;
  }

  get currentSource() {
    return this.sourceService.getApiSource();
  }

  setApiSource(source: Source) {
    this.sourceService.setApiSource(source);
    this.firebaseService.signOut();
  }

  showSignInDialog() {
    const dialogRef = this.dialog.open(SignInDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.controls) {
        this.firebaseService.signIn(result.controls['email'], result.controls['password']);
      }
    });
  }

  showSignUpDialog() {
    const dialogRef = this.dialog.open(SignUpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.controls) {
        this.firebaseService.signUp(result.controls['email'], result.controls['password']);
      }
    });
  }

  signOut() {
    this.firebaseService.signOut();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'F2') {
      this.showSources = !this.showSources;
    }
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }
}
