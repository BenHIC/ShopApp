import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthSerivce {
  // user = new Subject<User>();
  public user = new BehaviorSubject<User>(null);
  private tokenExperiationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.fireBaseAPIKey ,
        {
          email,
          password,
          returnSecureToken: true,
        })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentiation(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
        // catchError(errorRes => {
        //   let errorMessage = 'An error occurred!';
        //   if (!errorRes.error || !errorRes.error.error) {
        //     return throwError(errorMessage);
        //   }

        //   switch (errorRes.error.error.message) {
        //     case 'EMAIL_EXISTS':
        //       errorMessage = 'This email exists already!';
        //       break;
        //   }

        //   return throwError(errorMessage);
        // })
      );
  }

  logIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.fireBaseAPIKey,
        {
          email,
          password,
          returnSecureToken: true,
        })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentiation(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  autoLogIn() {
    // const userData: {
    //   email: string,
    //   id: string,
    //   _token: string,
    //   _tokenExpirationDate: Date
    // } = JSON.parse(localStorage.getItem('userData'));
    const userData: User = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }
    const loadUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadUser.getToken) {
      this.user.next(loadUser);
      const expriationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expriationDuration);
    }
  }

  logOut() {
    // this.router.navigate(['/auth ']);
    this.user.next(null);
    localStorage.removeItem('userData');

    if (this.tokenExperiationTimer) {
      clearTimeout(this.tokenExperiationTimer);
    }

    this.tokenExperiationTimer = null;
  }

  autoLogout(expriationDuration: number) {
    console.log(expriationDuration);
    this.tokenExperiationTimer = setTimeout(() => {
      this.logOut();
    }, expriationDuration);
  }

  private handleAuthentiation(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().setSeconds(expiresIn));
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Wrong password!';
        break;
    }

    return throwError(errorMessage);
  }
}
