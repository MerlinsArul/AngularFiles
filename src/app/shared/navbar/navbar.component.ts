import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(public user: UserService) { }

}
