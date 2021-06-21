import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Auth/services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  providers:[AuthService]
})
export class EncabezadoComponent implements OnInit{
  public user$: Observable<any> = this.authSvc.afAuth.user
  constructor(private authSvc: AuthService, private router: Router) { }
  main = '';
  user = {};
  
  ngOnInit(): void{
    this.authSvc.getCurrentUser()
      .then(data => {
        // console.log(data);
        this.main = (!data) ? '': 'tarjetas';
      })
  }

  async onLogout(){
    try{
      await this.authSvc.logout();
      // this.router.navigate(['/login']);
      window.location.href = "/login";
    }
    catch (error){console.log(error)}

  }
}
