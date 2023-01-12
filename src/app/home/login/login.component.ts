import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginform: any = FormGroup;
  loginarray: any = {}

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient,private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.loginform = new FormGroup({
      EmailId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {

    //   localStorage.setItem('token',"tokenwasgiven"),
    //  this.loginform.value.EmailId="merlinsjuliet@gmail.com" ? localStorage.setItem('usertype','user'):localStorage.setItem('usertype','admin')
    //  console.log("You have logged  in");

    console.log(this.loginarray);
    localStorage.setItem('EmailId',this.loginform.value.EmailId)
    localStorage.setItem("Password",this.loginform.value.password)
    // this.cookie.set("EmailId", JSON.stringify(this.loginarray));
    // this.cookie.set("Password", JSON.stringify(this.loginarray));
    // alert("user id(" + this.cookie.get("EmailId") + ")")

    if (this.loginarray.EmailId == "merlinsjuliet@gmail.com" && this.loginarray.password == "Merlins@01")
      this.router.navigate(['/adminpage'])

    else {

      this.http.get<any>("http://localhost:3000/posts").subscribe((res: any[]) => {
        //matching email and password
        const user = res.find((a: any) => {
          return a.EmailId === this.loginform.value.EmailId && a.password === this.loginform.value.password
        })
        //condition check for login
        if (user) {
         this.toastr.success('You have logged in Successfully','title')
          this.loginform.reset();
          this.router.navigate(['/homepage'])

        }
        else {
          this.toastr.warning("user not found with these credentials",'title')
        }

        (_err: any) => {
          this.toastr.warning("something went wrong");

        }
      }


      )
    }
  }
}
