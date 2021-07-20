import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './componentes/level/level.component';
import { JuegosComponent } from './juegos/juegos.component';
import { LecturaEscrituraComponent } from './lectura-escritura.component';
import { LetrasComponent } from './letras/letras.component';
import { NumerosComponent } from './numeros/numeros.component';
import { CantidadesComponent } from './cantidades/cantidades.component';
import { PalabrasComponent } from './palabras/juego1/palabras.component';
import { Letras2Component } from "./letras/letras2/letras2.component";
import { Juego2Component } from './palabras/juego2/juego2.component';
import { Juego3Component } from './palabras/juego3/juego3.component';
import { Nivel2Component } from './numeros/nivel2/nivel2.component';
import { Nivel3Component } from './numeros/nivel3/nivel3.component';

const routes: Routes = [
  { path: '', component: LecturaEscrituraComponent },
  { path: 'jue2', component: Juego2Component },
  { path: 'jue3', component: Juego3Component },
  { path: 'num', component: NumerosComponent },
  { path: 'niv2', component: Nivel2Component },
  { path: 'niv3', component: Nivel3Component },
  { path: 'letras2', component: Letras2Component },
  { path: 'level', component: LevelComponent },
  { path: 'letras', component: LetrasComponent},
  { path: 'numeros', component: NumerosComponent},
  { path: 'cantidades', component: CantidadesComponent},
  { path: 'palabras', component: PalabrasComponent},
  { path: 'letras2', component: Letras2Component},
  { path: 'juegos/game', component: JuegosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturaRoutingModule { }
