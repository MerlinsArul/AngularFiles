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
  public courselist: any;
  public enrollist: any;
  public user = localStorage.getItem("EmailId");

  constructor(private courseservice: CourseService, private enrollservice: EnrollService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.check();
  }

  public check() {
    this.enrollservice.enroll(this.enrollist).subscribe(res => {
      console.log(res);
      this.courseservice.getCourse(this.courselist).subscribe(res1 => {
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

  public addtoEnroll(item: any) {
    this.toastr.success('You have Enrolled Successfully')
    item.EmailId = this.user;
    this.enrollservice.addtoEnroll(item).subscribe();
    setTimeout(() => {
      this.check()
    }, 100);
  }
}




