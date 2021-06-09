import {AngularFireAuth} from '@angular/fire/auth';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  sonido = 'sonido.ogg';
  email = ' ';
  constructor(private router: Router, public auth: AngularFireAuth) { }
  ngOnInit(): void {
  }
  recuperar() {
    return this.auth.sendPasswordResetEmail(this.email)
      .then(() => this.openModal(true))
      .catch((error) => this.openModalError(true));
  }
  public mdlSampleIsOpen : boolean = false;
  public mdlSampleIsOpenError : boolean = false;
  public openModal(open : boolean) : void {
    this.mdlSampleIsOpen = open;
  }
  public openModalError(open : boolean) : void {
    this.mdlSampleIsOpenError = open;
  }
}
