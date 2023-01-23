import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticate!: boolean;
  constructor(private router:Router) { }

  isLogin = () => {
    if (this.getName()) {
      return true;
    }
    else {
      return false
    }
  }
  getName = () => {
    return localStorage.getItem('EmailId')
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
}
