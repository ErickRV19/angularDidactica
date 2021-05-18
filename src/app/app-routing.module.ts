import { MemoramaComponent } from './memorama/memorama.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { CardLevelComponent } from './components/card-level/card-level.component';
import { LevelComponent } from './components/level/level.component';
import { JuegoComponent } from './juego/juego.component';

const rutas: Routes = [
  { path: '', component: RecuperarComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'memorama', component: MemoramaComponent },
  { path: 'memorama/level', component: LevelComponent },
  { path: 'memorama/game', component: JuegoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
