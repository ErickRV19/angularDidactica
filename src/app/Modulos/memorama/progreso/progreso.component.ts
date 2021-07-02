import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})

export class ProgresoComponent implements OnInit {

  email = '';
  exp = 0;
  
  constructor(
    private activaRuta: ActivatedRoute,
    private usuarioSvc: UsuarioService
  ) { }

  ngOnInit(): void {
    this.activaRuta.params.subscribe(({ user }) => {
      this.usuarioSvc.getUsuarioChanges().subscribe(e=> {
        e.map(a => {
          if(user === a.email){
            this.email = a.email;
            this.exp = a.exp;
          }
        })
      })
    })
    
  }



}
