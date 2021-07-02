import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.component.html',
  styleUrls: ['./memorama.component.css']
})
export class MemoramaComponent implements OnInit {

  user='';
  constructor(
    private authSvc: AuthService,
  ) { }

  ngOnInit(): void {
    this.authSvc.getCurrentUser()
      .then( response => {
        this.user = response.email;
      })
  }

}
