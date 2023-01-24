import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersideService {
  public userdetails: any

  constructor(private http: HttpClient) { }

  public postUser(data: {}) {
    return this.http.post<any>(environment.baseUrl + "/users/", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public getUser(data: {}) {
    return this.http.get<any>(environment.baseUrl + "/users/", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public updateUser(data: {}, id: number) {
    return this.http.put<any>(environment.baseUrl + "/users/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  public deleteUser(id: number) {
    return this.http.delete<any>(environment.baseUrl + "/users/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}


