import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { EnrollService } from '../enroll/enroll.service';
import { ToastrService } from 'ngx-toastr';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courselist: any;
  enrollist: any;
  showenroll!: boolean;
  showenrolled!: boolean;
  user = localStorage.getItem("EmailId");
  constructor(private courseservice: CourseService, private enrollservice: EnrollService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.check();
  }
  check() {
    this.enrollservice.enroll(this.enrollist).subscribe(res => {
      console.log(res);
      this.courseservice.getcourse(this.courselist).subscribe(res1 => {
        this.courselist = res1;
        res1.forEach((a: any, i: any) => {
          delete a.id;
          res.forEach((b: any) => {
            if (a.courseid === b.courseid && this.user === b.EmailId) {
              this.courselist[i].enrolled = true;
            }
          })
        })
      })
    })
  }
  addtoEnroll(item: any) {
    this.toastr.success('You have Enrolled Successfully')
    item.EmailId = this.user;
    this.enrollservice.addtoEnroll(item).subscribe();
    this.check();
  }
}




