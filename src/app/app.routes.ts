import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {LoginComponent} from './Auth/login/login.component';
import {RegistroComponent} from './Auth/registro/registro.component';
import {RecuperarComponent} from './Auth/recuperar/recuperar.component';
import {TarjetasComponent} from './tarjetas/tarjetas.component';
import {TrazadoComponent} from './Modulos/trazado/trazado.component';



const app_routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'memorama', loadChildren: () => import('./Modulos/memorama/memorama.module').then(m => m.MemoramaModule)},
  { path: '', loadChildren: () => import('./Modulos/letras-num/letras-num.module').then(m => m.LetrasNumModule)},
  { path: 'trazado', component: TrazadoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const app_routing = RouterModule.forRoot(app_routes);
