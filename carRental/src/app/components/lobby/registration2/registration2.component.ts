import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {

  answer = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if(!form.valid)
    return form;

    console.log("username: "+form.value.username);
    console.log("eMail: "+form.value.email);
    console.log("questionAnswer: "+form.value.questionAnswer);
    form.resetForm;
  }

}
