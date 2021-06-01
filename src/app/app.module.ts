import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { CardLevelComponent } from './components/card-level/card-level.component';
import { LevelComponent } from './components/level/level.component';
import { JuegoComponent } from './juego/juego.component';
import { CardsComponent } from './components/cards/cards.component';
import { PersonajesComponent } from './pages/recuperar/componentes/personajes/personajes.component';
import { ColoresComponent } from './pages/recuperar/componentes/colores/colores.component';
import { SonidoComponent } from './components/sonido/sonido.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoramaComponent,
    NavbarComponent,
    RecuperarComponent,
    CardMenuComponent,
    CardLevelComponent,
    LevelComponent,
    JuegoComponent,
    CardsComponent,
    PersonajesComponent,
    ColoresComponent,
    SonidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
