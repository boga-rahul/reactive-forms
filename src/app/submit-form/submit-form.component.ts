import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get email() {
     return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get("password")
  }

  submitForm() {
    console.log(this.myForm.value)
  }

}
