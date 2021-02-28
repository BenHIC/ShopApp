import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthSerivce } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthSerivce, private router: Router) {

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.error = null;
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);

    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    this.error = null;

    if (this.isLoginMode) {
      authObs = this.authService.logIn(email, password);
      // .logIn(email, password)
      // .subscribe(
      //   resData => {
      //     console.log(resData);
      //     this.isLoading = false;
      //   },
      //   errorMessage => {
      //     console.log(errorMessage);
      //     this.error = errorMessage;
      //     this.isLoading = false;
      //   });
    } else {
      authObs = this.authService.signUp(email, password);
      // .signUp(email, password)
      // .subscribe(
      //   resData => {
      //     console.log(resData);
      //     this.isLoading = false;
      //   },
      //   errorMessage => {
      //     console.log(errorMessage);
      //     // switch (errorRes.error.error.message) {
      //     //   case 'EMAIL_EXISTS':
      //     //     this.error = 'This email exists already!';
      //     //     break;
      //     //   default:
      //     //     this.error = 'An error occurred!';
      //     //     break;
      //     // }
      //     this.error = errorMessage;
      //     this.isLoading = false;
      // });
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });
    form.reset();
  }
}
