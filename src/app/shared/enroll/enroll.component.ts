import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CourseList } from '../Model/Course';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})

export class EnrollComponent {
  public headArray = [
    { 'Head': 'Id', 'FieldName': 'id' },
    { 'Head': 'CourseName', 'FieldName': 'title' },
    { 'Head': 'Action', 'FieldName': '' }
  ];
  public enrolldata: any = [];
  public courses: any = [];

  constructor(private enrollservice: EnrollService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  public getCourse() {
    this.enrollservice.getCourse().subscribe(res => {
      this.courses = res;
    })
  }

  public getAllCourse() {
    this.enrollservice.getCourse()
      .subscribe(res => {
        this.courses = res;
        console.log(res);
      })
  }

  public delete(data: CourseList) {
    this.toastr.warning('Deleted from Enrollment')
    this.enrollservice.deleteEnroll(data.id)
      .subscribe(res => {
        this.getAllCourse();
      })
  }
}