import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD

  email = '';
  password = '';
=======
  sonido = "sonido.ogg";
  email = ' ';
  password = ' ';
>>>>>>> a0c677756b19d60908740200a8b7e3d1435c09d2

  constructor(private router: Router, public auth: AngularFireAuth)  { }

  ngOnInit(): void {
  }
  login() {
  //    console.log($(this.email), $(this.password));
  this.auth.signInWithEmailAndPassword(this.email, this.password)
  .catch(error => console.log(error.code)
  )
  .then(res => console.log(res));
    //this.router.navigate(['/memorama']);
  }

}
