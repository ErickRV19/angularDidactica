import { MemoramaComponent } from './memorama/memorama.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { CardLevelComponent } from './components/card-level/card-level.component';
import { LevelComponent } from './components/level/level.component';

const rutas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'memorama', component: MemoramaComponent },
  { path: 'memorama/level', component: LevelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
