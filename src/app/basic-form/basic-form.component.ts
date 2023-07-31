import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    const phone = this.fb.group({
      area: [''],
      prefix: ['']
    })

    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone
    })

    this.myForm.valueChanges.subscribe(console.log)

  }

}
