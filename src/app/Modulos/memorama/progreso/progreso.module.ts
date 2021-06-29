import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  exports: [
    AngularFirestoreModule,
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProgresoModule { }
