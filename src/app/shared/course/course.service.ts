import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private http: HttpClient) { }

  public postCourse(data: {}) {
    return this.http.post<any>(environment.baseUrl + "/courses/", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public getCourse(data: {}) {
    return this.http.get(environment.baseUrl + "/courses/", data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  public updateCourse(data: {}, id: number) {
    console.log('data', data)
    return this.http.put<any>(environment.baseUrl + "/courses/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public deleteCourse(id: number) {
    return this.http.delete<any>(environment.baseUrl + "/courses/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}







