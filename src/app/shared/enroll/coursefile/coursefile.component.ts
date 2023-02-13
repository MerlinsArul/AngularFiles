import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-coursefile',
  templateUrl: './coursefile.component.html',
  styleUrls: ['./coursefile.component.css'],
})
export class CoursefileComponent {
  public courses: any;

  constructor(private enrollservice: EnrollService) {
    this.getOrderAllCourse();
  }

  ngOnInit(): void {
    this.getOrderAllCourse();
  }
  
  public getOrderAllCourse() {
   this.enrollservice.getOrder().subscribe((res: any) => {
      this.courses = res;
      console.log(res);
      
    });
  }
}
