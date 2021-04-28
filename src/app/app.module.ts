import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { CardLevelComponent } from './components/card-level/card-level.component';
import { LevelComponent } from './components/level/level.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoramaComponent,
    NavbarComponent,
    LoginComponent,
    CardMenuComponent,
    CardLevelComponent,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
