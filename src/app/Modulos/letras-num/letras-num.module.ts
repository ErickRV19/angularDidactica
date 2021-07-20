import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturaEscrituraComponent } from './lectura-escritura.component';
import { LetrasComponent } from './letras/letras.component';
import { LevelComponent } from './componentes/level/level.component';
import { JuegosComponent } from './juegos/juegos.component';
import {LecturaRoutingModule} from './lect-esc-routing';
import { PalabrasComponent } from './palabras/juego1/palabras.component';
import { NumerosComponent } from './numeros/numeros.component';
import { CantidadesComponent } from './cantidades/cantidades.component';
import { Juego2Component } from './palabras/juego2/juego2.component';
import { Juego3Component } from './palabras/juego3/juego3.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Nivel2Component } from './numeros/nivel2/nivel2.component';
import { Nivel3Component } from './numeros/nivel3/nivel3.component';
import { Letras2Component } from './letras/letras2/letras2.component';


@NgModule({
  declarations: [
    LecturaEscrituraComponent,
    LetrasComponent,
    LevelComponent,
    JuegosComponent,
    PalabrasComponent,
    NumerosComponent,
    CantidadesComponent,
    Juego2Component,
    Juego3Component,
    Nivel2Component,
    Nivel3Component,
    Letras2Component
  ],
  exports: [
    LevelComponent,
    LecturaEscrituraComponent,
    LetrasComponent
  ],
  imports: [
    CommonModule,
    LecturaRoutingModule,
    DragDropModule
  ]
})
export class LetrasNumModule { }
