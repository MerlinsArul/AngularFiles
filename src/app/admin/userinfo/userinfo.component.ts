import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersideService } from 'src/app/shared/services/userside.service';
import { UserList, UserModel } from '../../shared/Model/User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})

export class UserinfoComponent implements OnInit {
  public showAdd!: boolean;
  public showUpdate!: boolean;
  public formValue!: FormGroup
  public usermodObj: UserModel = new UserModel()
  public userData: any;

  constructor(private formbuilder: FormBuilder, private json: UsersideService, private toastr: ToastrService) { }

  public headArray = [
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

  public add() {
    this.showAdd = true;
    this.showUpdate = false;
  }

  public getUser() {
    this.json.getUser(this.userData).subscribe((res => {
      this.userData = res;
    }))
  }

  public getAllUser() {
    this.json.getUser(this.userData)
      .subscribe(res => {
        this.userData = res;
      })
  }

  public postUserdetails() {
    this.usermodObj.Firstname = this.formValue.value.Firstname;
    this.usermodObj.Lastname = this.formValue.value.Lastname;
    this.usermodObj.EmailId = this.formValue.value.EmailId;
    this.json.postUser(this.usermodObj).subscribe(res => {
      this.formValue.reset();
      this.getAllUser();
      this.toastr.success("User Added Successfully")
    },
      (_err: any) => {
        alert("something went wrong")

      })
  }

  public onEdit(d: UserModel) {
    this.showAdd = false
    this.showUpdate = true;
    this.usermodObj.id = d.id
    this.formValue.controls['Firstname'].setValue(d.Firstname);
    this.formValue.controls['Lastname'].setValue(d.Lastname);
    this.formValue.controls['EmailId'].setValue(d.EmailId);
  }

  public updateUserdetails() {
    this.usermodObj.Firstname = this.formValue.value.Firstname;
    this.usermodObj.Lastname = this.formValue.value.Lastname;
    this.usermodObj.EmailId = this.formValue.value.EmailId;
    this.usermodObj.password = this.formValue.value.Password;
    this.json.updateUser(this.usermodObj, this.usermodObj.id).subscribe(res => {
      this.formValue.reset();
      this.getAllUser();
      this.toastr.success("User Detail Updated Successfully")
    },
      (_err: any) => {
        alert("something went wrong")
      })
  }

  public deleteUser(data: UserList) {
    this.json.deleteUser(data['id'])
      .subscribe(res => {
        this.toastr.warning("User Deleted successfully")
        this.getAllUser();
      })
  }
}

