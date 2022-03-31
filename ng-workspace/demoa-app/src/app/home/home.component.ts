import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // template:'<h1>Hello Basco</h1>',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'demoa-app';


  constructor() { }

  ngOnInit(): void {
  }

}
