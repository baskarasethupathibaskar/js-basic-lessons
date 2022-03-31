import { Component } from '@angular/core';

@Component({  //directives
  selector: 'my-root', //should follow kebab style
  // template:'<h1>Hello</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'chennai';

  onBoxValueChange(paramData: any)
  {
    console.log("app component:" + paramData.value);
  }
}
