import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
public courses!:any[];
public grandtotal:number = 0;
  constructor(private enrollservice:EnrollService) { }

  ngOnInit(): void {
    this.enrollservice.getcourse().subscribe(res=>{
      this.courses = res;
      this.grandtotal = this.enrollservice.gettotalprice();
      })
    }
  
    delete(item:any){
     alert('You have deleted the enrolled course')
      this.enrollservice.removeenrollitem(item)
   
}
}