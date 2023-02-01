import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { EnrollService } from '../enroll/enroll.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  public courseList: any;
  public enrolList: any;
  public user = localStorage.getItem("EmailId");

  constructor(private courseservice: CourseService, private enrollservice: EnrollService, private toastr: ToastrService) { }

  public ngOnInit(): void {
    this.check();
  }

// To Check whether the course is enrolled or not
  public check() {
    this.enrollservice.enroll(this.enrolList).subscribe(res => {
      console.log(res);
      this.courseservice.getCourse(this.courseList).subscribe(res1 => {
        this.courseList = res1;
        res1.forEach((a: any, i: any) => {
          delete a.id;
          res.forEach((b: any) => {
            if (a.courseid === b.courseid && this.user === b.EmailId) {
              this.courseList[i].enrolled = true;
            }
          })
        })
      })
    })
  }

// To Add the Course to the courselist
  public addtoEnroll(item: any) {
    this.toastr.success('You have Enrolled Successfully')
    item.EmailId = this.user;
    this.enrollservice.addtoEnroll(item).subscribe();
    setTimeout(() => {
      this.check()
    }, 100);
  }
}




