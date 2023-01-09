import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  public courselist = new BehaviorSubject<any>([])
  public enrolllist: any = []
  constructor() { }
  getcourse() {
    return this.courselist.asObservable();
  }
  addtoenroll(product: any) {
    this.enrolllist.push(product);
    this.courselist.next(this.enrolllist)
    this.gettotalprice();
  }

  // total price

  gettotalprice():number{
 let grandtotal = 0;
this.enrolllist.map((a:any)=>{
  grandtotal +=a.total;
// console.log(grandtotal)
})
return grandtotal;
  }


  //empty or delete all
  removeallenroll(){
    this.enrolllist=[]
    this.courselist.next(this.enrolllist);
  }

  removeenrollitem(product: any){
    this.enrolllist.map((a:any,index:any)=>{
     if(product.id ===a.id) 
      this.enrolllist.splice(index,1)
    })
    this.courselist.next(this.enrolllist);
  }
}
