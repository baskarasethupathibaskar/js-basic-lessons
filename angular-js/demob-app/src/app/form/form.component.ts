import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
//data-model
formModel:any;
@Input()
  data: any;
  counter = 0;
  @Output()
  onBoxDataChange: 
  EventEmitter<any>
   = new EventEmitter();
  
constructor() { }

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
onchange(event: Event) {
  this.data = (event.target as HTMLInputElement).value;
  this.onBoxDataChange.emit({value: this.data});
}
saveCustomer(formGroup: any) {
  if (formGroup.valid) {
    console.log(formGroup.value);
  }
}
}
