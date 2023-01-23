import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: any = FormGroup;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      EmailId: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
    })
  }
  explore() {
    this.router.navigate(['/coursefile'])
  }
  close() {
    this.router.navigate(['/enroll'])
  }
}
