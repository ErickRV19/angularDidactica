import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrazadoComponent } from './trazado/trazado.component';



@NgModule({
  declarations: [
    TrazadoComponent
  ],
  exports: [
    TrazadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulosModule { }
