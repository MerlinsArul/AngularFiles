import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EnrollService {
  public courselist = ([])
  public enrolllist = ([])

  constructor(private http: HttpClient) { }

  public getCourse() {
    const user = localStorage.getItem("EmailId");
    return this.http.get(environment.baseUrl + "/enroll?EmailId=" + user)
  }

  public addtoEnroll(product: {}) {
    return this.http.post(environment.baseUrl + "/enroll/", product);
  }

  public deleteEnroll(id: Number) {
    return this.http.delete<any>(environment.baseUrl + "/enroll/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public enroll(product: {}) {
    return this.http.get(environment.baseUrl + "/enroll/", product)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
