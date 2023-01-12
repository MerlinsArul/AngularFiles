import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private userservice:UserService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
  //   let isloggedin = this.authservice.isauthenticated();
  //   if (isloggedin) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/enroll'])
  //   }
  //   return true;
  // }
  if(this.userservice.islogin()){
    return true;
  }
  else{
    this.router.navigate(['/login'])
    console.log("False");
    
  }
return true;
}
}
