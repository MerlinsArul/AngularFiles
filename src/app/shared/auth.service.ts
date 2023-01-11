import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user:any){
    let UserArray =[];
    if(localStorage.getItem('Users')){
      UserArray = JSON.parse(localStorage.getItem('Users')!);
    }
    return UserArray.find((p: any) =>p.EmailId === user.EmailId && p.password === user.password)
  }
}
