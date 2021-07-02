import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-card-level',
  templateUrl: './card-level.component.html',
  styleUrls: ['./card-level.component.css']
})
export class CardLevelComponent implements OnInit {
  @Input() nivel: any;
  items = [1, 2, 3, 4];
  arr = Array;
  id = '';

  constructor(
    private authSvc: AuthService,
    private usuarioSvc: UsuarioService
  ) { }

  ngOnInit(): void {
    this.authSvc.getCurrentUser()
      .then(({ email }) => {
        this.usuarioSvc.getUsuarioChanges().subscribe(e => {
          e.map(a => {
            if (email === a.email) {
              this.id = a.id;
            }
          })
        })
      })
  }
}
