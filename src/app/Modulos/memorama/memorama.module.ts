import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoramaRoutingModule } from './memorama-routing.module';
import { MemoramaComponent } from './memorama.component';
import { CardMenuComponent } from './componente/card-menu/card-menu.component';
import { CardLevelComponent } from './componente/card-level/card-level.component';
import { CardsComponent } from './componente/cards/cards.component';
import { LevelComponent } from './componente/level/level.component';
import { JuegoComponent } from './juego/juego.component';
import { TimerComponent } from './componente/timer/timer.component';
import { CifrasPipe } from './../pipes/cifras.pipe';


@NgModule({
  declarations: [
    MemoramaComponent,
    CardMenuComponent,
    CardLevelComponent,
    CardsComponent,
    LevelComponent,
    JuegoComponent,
    TimerComponent,
    CifrasPipe
  ],
  exports: [
    CardLevelComponent
  ],
  imports: [
    CommonModule,
    MemoramaRoutingModule
  ]
})
export class MemoramaModule { }
