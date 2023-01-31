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
  public courseObj: CourseModel = new CourseModel
  public courseData: any;

  constructor(private formbuilder: FormBuilder, private courseservice: CourseService, private toastr: ToastrService) { }

  public attribute = [
    { 'Head': 'CourseId', 'FieldName': 'courseid' },
    { 'Head': 'CourseName', 'FieldName': 'title' },
    { 'Head': 'Description', 'FieldName': 'description' },
    { 'Head': 'Action', 'FieldName': '' }
  ];

  public ngOnInit(): void {
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

  /*Get Courses from Server */
  public getCourse() {
    this.courseservice.getCourse(this.courseData).subscribe(res =>
      this.courseData = res)
  }

/*Get All Courses from Server */
  public getAllCourse() {
    this.courseservice.getCourse(this.courseData)
      .subscribe(res =>
        this.courseData = res)
  }

  /* Edit the Course */
  public onEdit(data: CourseModel) {
    this.showAdd = false;
    this.showUpdate = true;
    this.courseObj.id = data.id
    this.courseForm = this.formbuilder.group({
      courseid: [data.courseid],
      title: [data.title],
      description: [data.description],
      image: ['']
    })
  }

  
  public updateCourseDetails(id: number) {
    this.courseObj = this.courseForm.value;
    this.courseservice.updateCourse(this.courseForm.value, id).subscribe(res => {
      this.courseForm.reset();
      this.getAllCourse();
      this.toastr.success("Course Updated Successfully");
    },
      (_err: any) => {
        console.log('errr', _err);
        alert("something went wrong")
      })
  }

  public postCourseDetails() {
    this.courseObj = this.courseForm.value;
    this.courseservice.postCourse(this.courseObj).subscribe(res => {
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
        this.courseObj.image = event.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
}




