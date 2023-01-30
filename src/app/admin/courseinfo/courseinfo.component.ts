import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseModel } from '../../shared/Model/Course'
import { CourseService } from 'src/app/shared/course/course.service';
import { ToastrService } from 'ngx-toastr';
import { CourseList } from '../../shared/Model/Course';

@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css']
})

export class CourseinfoComponent implements OnInit {
  public showAdd!: boolean;
  public showUpdate!: boolean;
  public courseForm!: FormGroup
  public coursemodObj: CourseModel = new CourseModel
  public courseData : any;

  constructor(private formbuilder: FormBuilder, private courseservice: CourseService, private toastr: ToastrService) { }

  public headArray = [
    { 'Head': 'CourseId', 'FieldName': 'courseid' },
    { 'Head': 'CourseName', 'FieldName': 'title' },
    { 'Head': 'Description', 'FieldName': 'description' },
    { 'Head': 'Action', 'FieldName': '' }
  ];

  ngOnInit(): void {
    this.courseForm = this.formbuilder.group({
      courseid: [''],
      title: [''],
      description: [''],
      image: ['']

    })
    this.getCourse();
    this.getAllCourse();
  }

  public add() {
    this.showAdd = true;
    this.showUpdate = false;
  }

  public getCourse() {
    this.courseservice.getCourse(this.courseData).subscribe((res: any) =>
      this.courseData = res)
  }

  public getAllCourse() {
    this.courseservice.getCourse(this.courseData)
      .subscribe(res =>
        this.courseData = res)
  }

  public onEdit(data: CourseModel) {
    this.showAdd = false;
    this.showUpdate = true;
    this.coursemodObj.id = data.id
    this.courseForm.controls['courseid'].setValue(data.courseid);
    this.courseForm.controls['title'].setValue(data.title);
    this.courseForm.controls['description'].setValue(data.description);
   }

  public updateCoursedetails() {
    // this.coursemodObj.courseid = this.courseForm.value.courseid;
    // this.coursemodObj.title = this.courseForm.value.title;
    // this.coursemodObj.description = this.courseForm.value.description;
    this.coursemodObj = this.courseForm.value;
    this.courseservice.updateCourse(this.coursemodObj, this.coursemodObj.id).subscribe(res => {
      this.courseForm.reset();
      this.getAllCourse();
      this.toastr.success("Course Updated Successfully");
    },
      (_err: any) => {
        alert("something went wrong")
      })
  }

  public postCoursedetails() {
    // this.coursemodObj.courseid = this.courseForm.value.courseid;
    // this.coursemodObj.title = this.courseForm.value.title;
    // this.coursemodObj.description = this.courseForm.value.description;
    this.coursemodObj = this.courseForm.value;
    this.courseservice.postCourse(this.coursemodObj).subscribe(res => {
      this.courseForm.reset();
      this.getAllCourse();
      this.toastr.success("Course Added Successfully")
    },
      (_err: any) => {
        alert("something went wrong")
      })
  }

  public deleteCourse(item: CourseList) {
    this.courseservice.deleteCourse(item.id)
      .subscribe(res => {
        this.toastr.warning("Course Deleted");
        this.getAllCourse();
      })
  }

  public onFile(input: any) {
    console.log(input.files); if (input.files && input.files[0]) {
      var reader = new FileReader(); reader.onload = (event: any) => {
        console.log('Got here: ', event.target.result);
        this.coursemodObj.image = event.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
}




