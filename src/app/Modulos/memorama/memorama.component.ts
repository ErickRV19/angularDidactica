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

  public user$: Observable<any> = this.authSvc.afAuth.user
  user = '';

  constructor(
    private authSvc: AuthService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.authSvc.getCurrentUser()
      .then(({ email }) => {
        this.user = email;
      })
  }

}
