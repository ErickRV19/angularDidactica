import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './componente/level/level.component';
import { JuegoComponent } from './juego/juego.component';
import { MemoramaComponent } from './memorama.component';

const routes: Routes = [
  { path: '', component: MemoramaComponent },
  { path: 'level/:id', component: LevelComponent },
  { path: 'game/:typeLevel/:level', component: JuegoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoramaRoutingModule { }
