import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersideService {
  userdetails: any
  constructor(private http: HttpClient) { }
  postUser(data: {}) {
    return this.http.post<any>(environment.baseUrl + "/users/", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getUser(data: {}) {
    return this.http.get<any>(environment.baseUrl + "/users/", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateUser(data: {}, id: number) {
    return this.http.put<any>(environment.baseUrl + "/users/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteUser(id: number) {
    return this.http.delete<any>(environment.baseUrl + "/users/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}


