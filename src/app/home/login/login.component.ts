import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginform: any = FormGroup;
  public loginarray: any = {}

  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

  public ngOnInit(): void {
    this.loginform = new FormGroup({
      EmailId: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    })
  }

  public login() {
    localStorage.setItem('EmailId', this.loginform.value.EmailId)
    localStorage.setItem("Password", this.loginform.value.password)
    if (this.loginarray.EmailId == "merlinsjuliet@gmail.com" && this.loginarray.password == "Merlins@01")
      this.router.navigate(['/admin'])
    else {
      this.http.get<any>(environment.baseUrl + "/users").subscribe((res: any[]) => {
        const user = res.find((a: any) => {
          return a.EmailId === this.loginform.value.EmailId && a.password === this.loginform.value.password
        })
        if (user) {
          this.toastr.success('You have logged in Successfully')
          this.loginform.reset();
          this.router.navigate(['/home'])
        }
        else {
          this.toastr.warning("user not found with these credentials")
        }
        (_err: any) => {
          this.toastr.warning("something went wrong");
        }
      })
    }
  }

  public close() {
    this.router.navigate(['/home'])
  }
}
