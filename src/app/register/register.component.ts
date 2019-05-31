import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email : string;
  password:string;
  invalidForm:boolean;

  constructor(public fAuth: AngularFireAuth, public router : Router) { }

  ngOnInit() {
  }

  register () {
    this.fAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(value =>{
      //if successful
      this.router.navigate(['/todo'])
    })
    .catch(err =>{
      this.invalidForm=true;
    })
  }

}
