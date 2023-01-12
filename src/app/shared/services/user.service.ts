import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
authenticate!:boolean;
  constructor() { }

islogin=()=>{
if(this.getName()){
  return true;
}
else{
  return false
}
}
getName=()=>{
  return localStorage.getItem('EmailId')
}
logout(){
  localStorage.clear();
  
}
}
