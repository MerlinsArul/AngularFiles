import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public authenticate!: boolean;

  constructor(private router: Router) { }

  public isLogin = () => {
    if (this.getName()) {
      return true;
    }
    else {
      return false
    }
  }

  public getName = () => {
    return localStorage.getItem('EmailId')
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
}
