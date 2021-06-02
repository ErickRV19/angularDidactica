import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sonido = "sonido.ogg";
  email = '';
  password = '';

  constructor(private router: Router, public auth: AngularFireAuth)  { }

  ngOnInit(): void {
  }
  login() {
  //    console.log($(this.email), $(this.password));
  return this.auth.signInWithEmailAndPassword(this.email, this.password)
  .then(() => this.router.navigate(['/memorama']))
    .catch((error) => this.openModalError(true));
    //this.router.navigate(['/memorama']);
  }
  public openModalError(open : boolean) : void {
    this.mdlSampleIsOpenError = open;
  }
  public mdlSampleIsOpenError : boolean = false;


}
