import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { UsuarioService } from 'src/app/Modulos/memorama/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService]
})
export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl (''),
    password: new FormControl (''),
  });
  constructor(private authSvc:AuthService, private router: Router, private usuarioSvc: UsuarioService) { }

  ngOnInit(): void {
  }
  async onRegister(){
    const {email, password} = this.registerForm.value;
    const data = {
      email: email,
      exp: 10
    }
    try {
      const user = await this.authSvc.register(email, password);
      if(user){
        //Crear datos en collection
        this.usuarioSvc.saveUsuario(data);
        this.router.navigate(['/home']);
      }
    }
    catch (error){console.log(error)}
  }

}
