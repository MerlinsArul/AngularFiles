import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll/enroll.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalitem = 0;
 
  constructor(private enrollservice:EnrollService) { }

  ngOnInit(): void {
    this.enrollservice.getcourse().subscribe(res=>{
      this.totalitem=res.length;
    })
  }

}
