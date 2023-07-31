import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormArray } from "@angular/forms"

@Component({
  selector: 'app-form-arrays',
  templateUrl: './form-arrays.component.html',
  styleUrls: ['./form-arrays.component.scss']
})
export class FormArraysComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {
    const phone = this.fb.group({
      area: '',
      prefix: ''
    });

    this.phoneForms.push(phone);
  }

  removePhone(i: number) {
    this.phoneForms.removeAt(i)
  }

}
