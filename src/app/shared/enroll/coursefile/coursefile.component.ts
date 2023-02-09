import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-coursefile',
  templateUrl: './coursefile.component.html',
  styleUrls: ['./coursefile.component.css'],
})
export class CoursefileComponent {
  public courses: any;

  constructor(private enrollservice: EnrollService) {}

  ngOnInit(): void {
    this.getCourse();
  }

  public getCourse() {
    this.enrollservice.getCourse().subscribe((res: any) => {
      this.courses = res;
    });
  }

  public getAllCourse() {
    this.enrollservice.getCourse().subscribe((res: any) => {
      this.courses = res;
    });
  }
}
