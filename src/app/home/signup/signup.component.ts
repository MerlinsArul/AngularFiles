import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm !: FormGroup 
  submitted = false;

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
         
          Firstname: ['', Validators.required],
          Lastname: ['', Validators.required],
          EmailId: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      }, 
      );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
   signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
          return;
             }
    this.http.post<any>("http://localhost:3000/posts",this.registerForm.value).subscribe(res=>{
    alert("student registred sucessfully");
    this.registerForm.reset();
    this.router.navigate(['login'])
      },err=>{
        alert("something went wrong");
      })  
    }
}
