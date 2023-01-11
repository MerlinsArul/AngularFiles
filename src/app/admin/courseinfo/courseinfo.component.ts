import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {CourseModel} from'./Course'
import { CourseService } from 'src/app/shared/course/course.service';


@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css']
})
export class CourseinfoComponent implements OnInit {
  courseForm!: FormGroup
  coursemodObj: CourseModel = new CourseModel
  courseData: any;
  constructor(private formbuilder: FormBuilder, private http: HttpClient,private courseservice:CourseService) { }

  ngOnInit(): void {
    this.courseForm = this.formbuilder.group({
      Coursename: [''],
      Description: [''],
      Fees: [''],
      
    })
    this.getAllCourse();
  }

  postCoursedetails() {
    // const postdata = this.formValue.value;
    // this.http.post('http://localhost:3000/posts',postdata).subscribe(response=>(console.log(response)
    // ))
    this.coursemodObj.Coursename = this.courseForm.value.Coursename;
    this.coursemodObj.Description = this.courseForm.value.Description;
    this.coursemodObj.Fees = this.courseForm.value.Fees;
   
    this.courseservice.postCourse(this.coursemodObj).subscribe(res => {
      console.log(res);
      alert("list added succeesfully")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.courseForm.reset();
      this.getAllCourse();
    },
      (_err: any) => {
        alert("something went wrong")

      })

  }
  getAllCourse() {
    this.courseservice.getcourse()
      .subscribe(res => {
        this.courseData = res;
      })
  }
  deleteCourse(item: any) {
    this.courseservice.deleteCourse(item.id)
      .subscribe(res => {
        alert("Course Deleted");
        this.getAllCourse();
      })
  }
  onEdit(item: any) {
    this.coursemodObj.id = item.id
    this.courseForm.controls['Coursename'].setValue(item.Coursename);
    this.courseForm.controls['Description'].setValue(item.Description);
    this.courseForm.controls['Fees'].setValue(item.Fees);
  
  }
  UpdateCoursedetails() {
    this.coursemodObj.Coursename = this.courseForm.value.Coursename;
    this.coursemodObj.Description = this.courseForm.value.Description;
    this.coursemodObj.Fees = this.courseForm.value.Fees;

    this.courseservice.updateCourse(this.coursemodObj, this.coursemodObj.id).subscribe(res => {
      console.log(res);
      alert("updated succeesfully")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.courseForm.reset();
      this.getAllCourse();
    })
  }
}




