import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})

export class ProgresoComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user

  // Datos de usuario
  usuario = '';
  experencia = 0;

  constructor(
    private authSvc: AuthService,
    private usuarioService: UsuarioService,
    private activaRuta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activaRuta.params.subscribe(({user}) => {
      this.datosProgreso(user)
    })
  }

  async datosProgreso(user) {
    await this.usuarioService.getUsarioList()
      .subscribe( res => {
        console.log(res);
        res.map(({email, exp}) =>{
          if(user == email){
            this.usuario = email;
            this.experencia = exp;
          }
        })
      })
  }


}
