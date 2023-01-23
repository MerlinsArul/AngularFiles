import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EnrollService {
  public courselist = new BehaviorSubject<any>([])
  public enrolllist: any = []
  constructor(private http: HttpClient) { }
  getCourse() {
    const user = localStorage.getItem("EmailId");
    return this.http.get(environment.baseUrl + "/enroll?EmailId=" + user)
  }
  addtoEnroll(product: {}) {
    return this.http.post(environment.baseUrl + "/enroll/", product);
  }

  deleteEnroll(id:Number) {
    return this.http.delete<any>(environment.baseUrl + "/enroll/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  enroll(product: {}) {
    return this.http.get(environment.baseUrl + "/enroll/", product)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
