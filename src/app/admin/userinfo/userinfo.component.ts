import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonService } from 'src/app/shared/json.service';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './User'
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  formValue!: FormGroup
  usermodObj: UserModel = new UserModel()
  userData: any;
  constructor(private formbuilder: FormBuilder, private json: JsonService, private http: HttpClient) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Firstname: [''],
      Lastname: [''],
      EmailId: [''],
      Password: ['']
    })
    this.getAllUser();
  }

  postUserdetails() {
    // const postdata = this.formValue.value;
    // this.http.post('http://localhost:3000/posts',postdata).subscribe(response=>(console.log(response)
    // ))
    this.usermodObj.Firstname = this.formValue.value.Firstname;
    this.usermodObj.Lastname = this.formValue.value.Lastname;
    this.usermodObj.EmailId = this.formValue.value.EmailId;
    this.usermodObj.password = this.formValue.value.Password;
    this.json.postUser(this.usermodObj).subscribe(res => {
      console.log(res);
      alert("list added succeesfully")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.formValue.reset();
      this.getAllUser();
    },
      err => {
        alert("something went wrong")

      })

  }
  getAllUser() {
    this.json.getUser(this.userData)
      .subscribe(res => {
        this.userData = res;
      })
  }
  deleteUser(data: any) {
    this.json.deleteUser(data.id)
      .subscribe(res => {
        alert("User Deleted");
        this.getAllUser();
      })
  }
  onEdit(d: any) {
    this.usermodObj.id = d.id
    this.formValue.controls['Firstname'].setValue(d.Firstname);
    this.formValue.controls['Lastname'].setValue(d.Lastname);
    this.formValue.controls['EmailId'].setValue(d.EmailId);
    this.formValue.controls['Password'].setValue(d.Password)
  }
  UpdateUserdetails() {
    this.usermodObj.Firstname = this.formValue.value.Firstname;
    this.usermodObj.Lastname = this.formValue.value.Lastname;
    this.usermodObj.EmailId = this.formValue.value.EmailId;
    this.usermodObj.password = this.formValue.value.Password;
    this.json.updateUser(this.usermodObj, this.usermodObj.id).subscribe(res => {
      console.log(res);
      alert("updated succeesfully")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.formValue.reset();
      this.getAllUser();
    })
  }
}
