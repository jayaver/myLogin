import { Component } from '@angular/core';

declare const submitForm : any;
declare const saveMessage : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuthwithDb';
  onSubmit () {
    submitForm();
    saveMessage();

}
}
