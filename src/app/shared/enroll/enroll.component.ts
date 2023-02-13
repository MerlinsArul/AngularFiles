import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseList, CourseModel } from '../Model/Course';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css'],
})
export class EnrollComponent {
  public headArray = [
    { Head: 'Id', FieldName: 'id' },
    { Head: 'CourseName', FieldName: 'title' },
    { Head: 'Action', FieldName: '' },
  ];
  public enrolldata: any = [];
  public courses: any = [];

  constructor(
    public enrollservice: EnrollService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  public getCourse() {
    this.enrollservice.getCourse().subscribe((res) => {
      this.courses = res;
      console.log(res);
    });
  }

  public emptyCart(data: CourseModel) {
    if (Array.isArray(data)) {
      data.forEach((a) => {
        const course = Object.assign({},a)
         delete course.id;
        this.enrollservice.addToOrder(course).subscribe((a) => {
          console.log(a);
        });
      });
    }
    setTimeout(()=>{
     if (Array.isArray(data)) {
      console.log(data);
      data.forEach((a) => {
        console.log('deleted');
         console.log(a);
        this.enrollservice.deleteEnroll(a.id).subscribe((a) => {
          console.log(a);
          this.getCourse();
        });
      });
    }},1000)
   // this.router.navigate(['/checkout'])
  }

  public getAllCourse() {
    this.enrollservice.getCourse().subscribe((res) => {
      this.courses = res;
    });
  }

  public delete(data: CourseList) {
    this.toastr.warning('Deleted from Enrollment');
    this.enrollservice.deleteEnroll(data.id).subscribe((res) => {
      this.getAllCourse();
    });
  }
  //  getData(data:any){
  //   this.enrollservice.fetchdata(data).subscribe(x=>{
  //     console.log(x);

  //   })
  //  }

  //  public removeAll(){
  //     this.enrollservice.deleteCheckOut();

  //  }
}
