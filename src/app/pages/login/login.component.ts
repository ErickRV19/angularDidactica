import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ' ';
  password = ' ';

  constructor(private router: Router, public auth: AngularFireAuth)  { }

  ngOnInit(): void {
  }
  login() {
  //    console.log($(this.email), $(this.password));
  this.auth.signInWithEmailAndPassword(this.email, this.password)
  .catch(error => console.log(error.code)
  )
  .then(res => console.log(res)),
  this.router.navigate(['/memorama']);
  }

}
