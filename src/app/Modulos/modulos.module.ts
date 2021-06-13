import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrazadoComponent } from './trazado/trazado.component';
import { ProgresoComponent } from './memorama/progreso/progreso.component';

@NgModule({
  declarations: [
    TrazadoComponent,
    ProgresoComponent
  ],
  exports: [
    TrazadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulosModule { }
