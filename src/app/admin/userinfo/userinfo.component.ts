import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersideService } from 'src/app/shared/services/userside.service';
import { UserModel } from '../../shared/Model/User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  showadd!: boolean;
  showupdate!: boolean;
  formValue!: FormGroup
  usermodObj: UserModel = new UserModel()
  userData: any;
  constructor(private formbuilder: FormBuilder, private json: UsersideService, private toastr: ToastrService) { }

  headArray = [
    { 'Head': 'Firstname', 'FieldName': 'Firstname' },
    { 'Head': 'Lastname', 'FieldName': 'Lastname' },
    { 'Head': 'EmailId', 'FieldName': 'EmailId' },
    { 'Head': 'Action', 'FieldName': '' }
  ];
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Firstname: [''],
      Lastname: [''],
      EmailId: [''],
      Password: ['']
    })
    this.getUser();
    this.getAllUser();
  }
  add() {
    this.showadd = true;
    this.showupdate = false;
  }
  getUser() {
    this.json.getUser(this.userData).subscribe((res => {
      this.userData = res;
      console.log(res);
    }))
  }
  getAllUser() {
    this.json.getUser(this.userData)
      .subscribe(res => {
        this.userData = res;
      })
  }
  postUserdetails() {
    this.usermodObj.Firstname = this.formValue.value.Firstname;
    this.usermodObj.Lastname = this.formValue.value.Lastname;
    this.usermodObj.EmailId = this.formValue.value.EmailId;
    this.json.postUser(this.usermodObj).subscribe(res => {
      console.log(res);
      this.formValue.reset();
      this.getAllUser();
      this.toastr.success("User Added Successfully")
    },
      (_err: any) => {
        alert("something went wrong")

      })
  }
  onEdit(d: any) {
    this.showadd = false
    this.showupdate = true;
    this.usermodObj.id = d.id
    this.formValue.controls['Firstname'].setValue(d.Firstname);
    this.formValue.controls['Lastname'].setValue(d.Lastname);
    this.formValue.controls['EmailId'].setValue(d.EmailId);
    this.formValue.controls['Password'].setValue(d.Password)
  }
  updateUserdetails() {
    this.usermodObj.Firstname = this.formValue.value.Firstname;
    this.usermodObj.Lastname = this.formValue.value.Lastname;
    this.usermodObj.EmailId = this.formValue.value.EmailId;
    this.usermodObj.password = this.formValue.value.Password;
    this.json.updateUser(this.usermodObj, this.usermodObj.id).subscribe(res => {
      console.log(res);
      this.formValue.reset();
      this.getAllUser();
      this.toastr.success("User Detail Updated Successfully")
    },
      (_err: any) => {
        alert("something went wrong")
      })
  }
  deleteUser(data: any) {
    this.json.deleteUser(data.id)
      .subscribe(res => {
        this.toastr.warning("User Deleted successfully")
        this.getAllUser();
      })
  }
}

