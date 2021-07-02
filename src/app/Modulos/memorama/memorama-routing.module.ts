import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './componente/level/level.component';
import { JuegoComponent } from './juego/juego.component';
import { MemoramaComponent } from './memorama.component';
import { ProgresoComponent } from './progreso/progreso.component';

const routes: Routes = [
  { path: '', component: MemoramaComponent },
  { path: 'level/:id', component: LevelComponent },
  { path: 'game/:typeLevel/:level/:id', component: JuegoComponent },
  { path: 'progreso/:user', component: ProgresoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoramaRoutingModule { }
