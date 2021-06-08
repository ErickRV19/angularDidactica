import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: 'memorama', loadChildren: () => import('./memorama/memorama.module').then(m => m.MemoramaModule) },
  { path: '**', loadChildren: () => import('./memorama/memorama.module').then(m => m.MemoramaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
