import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  public courses!: any
  public grandtotal: number = 0;
  constructor(private enrollservice: EnrollService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.enrollservice.getcourse().subscribe(res => {
      console.log('ress', res);
      this.courses = res;
      this.grandtotal = this.enrollservice.gettotalprice();
    })
  }

  delete(item: any) {
    this.toastr.warning('Deleted from cart', 'title')
    this.enrollservice.removeenrollitem(item)

  }
}