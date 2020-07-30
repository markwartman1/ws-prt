import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() { 

    this.signupForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender' : new FormControl('male')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value.username);
    console.log(this.signupForm.value.email);
    console.log(this.signupForm.value.gender);
    this.signupForm.reset();
  }

}
