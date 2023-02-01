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
  public userObj: UserModel = new UserModel()
  public userData: any;

  constructor(private formbuilder: FormBuilder, private json: UsersideService, private toastr: ToastrService) { }

  public attribute = [
    { 'Head': 'Firstname', 'FieldName': 'Firstname' },
    { 'Head': 'Lastname', 'FieldName': 'Lastname' },
    { 'Head': 'EmailId', 'FieldName': 'EmailId' },
    { 'Head': 'Action', 'FieldName': '' }
  ];

  public ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Firstname: [''],
      Lastname: [''],
      EmailId: [''],
      Password: ['']
    })
    this.getUser();
  }

  public add() {
    this.showAdd = true;
    this.showUpdate = false;
  }

  // To Get the User Details from Server
  public getUser() {
    this.json.getUser(this.userData).subscribe(res =>
      this.userData = res)
  }

  // To Edit the Content
  public onEdit(d: UserModel) {
    this.showAdd = false
    this.showUpdate = true;
    this.userObj.id = d.id
    this.formValue = this.formbuilder.group({
      Firstname: [d.Firstname],
      Lastname: [d.Lastname],
      EmailId: [d.EmailId],
      Password: [d.password]
    })
  }

  //To Update the Content
  public updateUserDetails(id: number) {
    this.userObj = this.formValue.value
    this.json.updateUser(this.formValue.value, id).subscribe(res => {
      console.log(res);
      this.formValue.reset();
      this.getUser();
      this.toastr.success("User Detail Updated Successfully")
    },
      (_err: any) => {
        alert("something went wrong")
      })
  }

  //To Add the Content
  public postUserDetails() {
    this.userObj = this.formValue.value;
    this.json.postUser(this.userObj).subscribe(res => {
      this.formValue.reset();
      this.getUser();
      this.toastr.success("User Added Successfully")
    },
      (_err: any) => {
        alert("something went wrong")

      })
  }

  //To Delete the Content
  public deleteUser(data: UserList) {
    this.json.deleteUser(data['id'])
      .subscribe(res => {
        this.toastr.warning("User Deleted successfully")
        this.getUser();
      })
  }
}

