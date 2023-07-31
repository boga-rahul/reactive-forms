import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.scss']
})
export class ValidFormComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    age: [null, [
      Validators.required,
      Validators.min(18),
      Validators.max(65),
      Validators.maxLength(2)
    ]],
    agree: [false, [Validators.requiredTrue]]
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {


  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }

}
