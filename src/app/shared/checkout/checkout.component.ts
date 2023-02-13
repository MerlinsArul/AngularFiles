import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EnrollService } from '../enroll/enroll.service';
import { CourseModel } from '../Model/Course';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: any = FormGroup;
  courses : any;


  constructor(private router: Router,private enrollservice:EnrollService) {}



  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      EmailId: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      Fees:new FormControl('',Validators.required)
    });
    
  }

  public explore(data:CourseModel) {
    // console.log('hitted');
    
    // if (Array.isArray(data)) {
    //   console.log(data);
    //   data.forEach((a) => {
    //     console.log(a);
    //     this.enrollservice.deleteEnroll(a.id).subscribe((a) => {
    //       console.log(a);
    //       this.getAllCourse();
    //     });
    //   });
    // }
    this.router.navigate(['/coursefile']);
  }
  public getAllCourse() {
    this.enrollservice.getCourse().subscribe((res) => {
      this.courses = res;
    });
  }

  public close() {
 this.router.navigate(['/enroll']);
  }

  
}
