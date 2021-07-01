import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import {app_routing} from './app.routes';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import {ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {ModulosModule} from './Modulos/modulos.module';
import { RecuperarComponent } from './Auth/recuperar/recuperar.component';
import { SonidoComponent } from './sonido/sonido.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardService } from './Modulos/memorama/services/cardService';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    RecuperarComponent,
    SonidoComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ModulosModule,
    FormsModule,
    app_routing,
    BrowserAnimationsModule
  ],
  providers: [
    CardService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
