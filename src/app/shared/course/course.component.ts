import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { EnrollService } from '../enroll/enroll.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courselist: any;
 
 constructor(private courseservice:CourseService,private enrollservice:EnrollService) { }

  ngOnInit(): void {
    this.courseservice.getcourse().subscribe(res => {
      // console.log(res);
      this.courselist = res;
      this.courselist.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total:a.price })
      });
    });
  }
  addtoenroll(item: any) {
    alert('You have enrolled')
    this.enrollservice.addtoenroll(item);
    console.log(item)
  }


  }


