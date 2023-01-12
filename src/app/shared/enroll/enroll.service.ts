import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  public courselist = new BehaviorSubject<any>([])
  public enrolllist: any = []
  constructor() {
    const ls = JSON.parse(localStorage.getItem('enroll')!)
    if (ls) this.courselist.next(ls);
  }
  getcourse() {
    return this.courselist.asObservable();
  }
  setcourse(product: any) {
    this.enrolllist.push(...product);
    this.courselist.next(product);
  }
  //local storage
  addtoenroll(product: any) {
    const ls = JSON.parse(localStorage.getItem('enroll')!)
    let exist: any;
    if (ls)
      exist = ls.find((item: any) => {
        return item.id === product.id;
      });
    if (exist) {
      exist.qty++;
      localStorage.setItem('enroll', JSON.stringify(ls));
    }
    else {
      if (ls) {
        const newData = [...ls, product];
        localStorage.setItem('enroll', JSON.stringify(newData));
        this.courselist.next(JSON.parse(localStorage.getItem('enroll')!))
      }

      this.enrolllist.push(product);
      localStorage.setItem('enroll', JSON.stringify(this.enrolllist));
      this.courselist.next(this.enrolllist);
      this.gettotalprice();
      return;

    }
   
  }



  gettotalprice(): any {
    let grandtotal = 0;
    this.enrolllist.map((a: any) => {
      grandtotal += a.total;
      console.log(grandtotal)
    })
    return grandtotal;
   
  }


  //empty or delete all
   removeenrollitem(product: any) {
    this.enrolllist.map((a: any, index: any) => {
      if (product.id === a.id)
        this.enrolllist.splice(index, 1)
    })
    this.courselist.next(this.enrolllist);
  }
}
