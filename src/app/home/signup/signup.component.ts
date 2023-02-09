import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public registerForm!: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}'),
        ],
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  //To Add the User Details to Server
  public signUp() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.http
      .post<any>(environment.baseUrl + '/users/', this.registerForm.value)
      .subscribe(
        (res) => {
          this.toastr.success('You have Registered Successfully');
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        (err) => {
          this.toastr.warning('Something Went wrong');
        }
      );
  }

  public close() {
    this.router.navigate(['/home']);
  }
}
