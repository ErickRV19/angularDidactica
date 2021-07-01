import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../database/usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private db: AngularFirestore
  ) { }

  createUsuario(usuario: Usuario) {
    return new Promise<any>((resolve, rejects) => {
      this.db
        .collection('usuario-collection')
        .add(usuario)
        .then(response => { console.log(response) }
          , error => rejects(error));
    })
  }

  getUsarioList() {
    return this.db
      .collection("usuario-collection")
      .valueChanges()
  }

  prueba(email){
    return this.db
      .collection("usuario-collection")
      .doc('email/d@d.com')
      .valueChanges()
  }
  updateUsario(usuario: Usuario, id) {
    return this.db
      .collection("usuario-collection")
      .doc(id)
      .update({
        experiencia: usuario.exp
      });
  }
}
