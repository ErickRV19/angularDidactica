import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoramaRoutingModule } from './memorama-routing.module';
import { MemoramaComponent } from './memorama.component';
import { CardMenuComponent } from './componente/card-menu/card-menu.component';
import { CardLevelComponent } from './componente/card-level/card-level.component';
import { CardsComponent } from './componente/cards/cards.component';
import { LevelComponent } from './componente/level/level.component';
import { JuegoComponent } from './juego/juego.component';


@NgModule({
  declarations: [
    MemoramaComponent,
    CardMenuComponent,
    CardLevelComponent,
    CardsComponent,
    LevelComponent,
    JuegoComponent,
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
