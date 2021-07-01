import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
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
  constructor(
    private authSvc:AuthService, 
    private router: Router,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
  }
  async onRegister(){
    const {email, password} = this.registerForm.value;

    // Los datos del usario hacia el modelo
    const datos = {
      correo: email,
      experiencia: 0
    }
    
    try {
      const user = await this.authSvc.register(email, password);
      
      if(user){
        // Se creo el usuario --usando el modelo
        this.usuarioService.createUsuario(datos);
        this.router.navigate(['/home']);
      }
    }
    catch (error){console.log(error)}
  }

}
