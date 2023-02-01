import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public authenticate!: boolean;

  constructor(private router: Router) { }

  //To Check whether user is LoggedIn
  public isLogin = () => {
    if (this.getName()) {
      return true;
    }
    else {
      return false
    }
  }

  //To Get the UserDetails from LocalStorage
  public getName = () => {
    return localStorage.getItem('EmailId')
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
}
