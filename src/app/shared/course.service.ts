import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
coursedetails:any
  constructor(private http:HttpClient) { }
  protected url = "http://localhost:3000";

  getcourse(){
    return this.http.get("http://localhost:3000/courses/")
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  postCourse(data:any){
   return this.http.post<any>("http://localhost:3000/courses/",data)
   .pipe(map((res:any)=>{
    return res;
   }))
  }
  updateCourse(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/courses/"+id,data)
    .pipe(map((res:any)=>{
     return res;
    }))
   }
   deleteCourse(id:number){
    return this.http.delete<any>("http://localhost:3000/courses/" +id)
    .pipe(map((res:any)=>{
     return res;
    }))
   }
}







