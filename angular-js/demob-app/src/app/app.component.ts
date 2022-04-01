import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demob-app';
  onBoxValueChange(paramData: any)
  {
    console.log("app component:" + paramData.value);
  }
}

