import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {rangeValidator,emailMatchValidator}from '../my-validator'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;

  empRecord: any = {
    firstName:'baskar',
    lastName:'sethupathi',
    email:'basco@gmail.com',
    mobile:'9876543210',
  }
  
  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, 
          Validators.email]],
      },{validators:emailMatchValidator}),
      mobile: [''],
      sendNotification: ['email'],
      range: ['',[rangeValidator(10,20)]]


    });
  }

  ngOnInit(): void {

  }
  get firstName() {return this.employeeFormGroup.get('firstName')!;}
  get mobile() {return this.employeeFormGroup.get('mobile')!;}
  get range() {return this.employeeFormGroup.get('range')!;}
  get emailGroup() {return this.employeeFormGroup.get('emailGroup')!;}
 
  loadEmployee() {
    let data = {
      firstName:'baskar',
      lastName:'sethupathi'
    }
    this.employeeFormGroup.patchValue(data);
  }

  doNotification(msgtype:any) {
    if(msgtype == 'sms') {
      let mobileControl= this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required
      ,rangeValidator(8000000000,9999999999)]);
      mobileControl?.updateValueAndValidity();
    }
  }


}