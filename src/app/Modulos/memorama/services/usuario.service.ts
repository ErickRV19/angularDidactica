import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../database/usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private angularFirestore: AngularFirestore) { }

  getUsuarioDoc(id){
    return this.angularFirestore
    .collection('usuario-collection')
    .doc(id)
    .valueChanges()
  }

  getUsarioList(){
    return this.angularFirestore
    .collection('usuario-collection')
    .snapshotChanges();
  }

  createUsuario(usuario: Usuario){
    return new Promise<any>((resolve, rejects) => {
      this.angularFirestore
        .collection('usuario-collection')
        .add(usuario)
        .then(response => {console.log(response)}
            ,error => rejects(error));
    })
  }

  deleteUsuario(usuario){
    return this.angularFirestore
      .collection('usuario-collection')
      .doc(usuario.id)
      .delete()
  }

  updateUsario(usuario: Usuario, id) {
    return this.angularFirestore
      .collection("usuario-collection")
      .doc(id)
      .update({
        experiencia: usuario.experiencia
      });
  }
}
