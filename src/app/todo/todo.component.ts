import { Component, OnInit } from '@angular/core';

declare const submitForm : any;
declare const saveMessage : any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  submit () {
    submitForm();
    saveMessage();

  }

  constructor() { }

  ngOnInit() {
  }

}
