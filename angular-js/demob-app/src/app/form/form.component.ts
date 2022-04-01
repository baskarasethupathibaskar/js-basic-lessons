import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
//data-model
formModel:any;
constructor() { console.log("customer form loaded")
}

ngOnInit(): void {
  this.formModel = {
    PersonName : '',
    AadharNumbar : '',
    DateOfBirth : '',
    City : '',
    DateOfTest : '',
    TimeOfTest : '',
    Result : '',
    LabName : '',
    Report : '',
    Gender : '',

  }
}
saveCustomer(formGroup: any) {
  if (formGroup.valid) {
    console.log(formGroup.value);
  }
}
}
