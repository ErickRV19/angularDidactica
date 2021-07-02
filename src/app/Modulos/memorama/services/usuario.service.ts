import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;

  constructor(private afs: AngularFirestore) { 
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
  }

  getOneUsuario(id) {
    return this.afs
    .collection('usuarios')
    .doc(id)
    .valueChanges()
  }

  getUsuarioChanges(){
    return this.afs.collection<Usuario>('usuarios')
      .valueChanges();
  }

  updateUsuarioExp(usuario: Usuario, id) {
    return this.afs
      .collection("usuarios")
      .doc(id)
      .update({
        exp: usuario.exp
      });
  }

  // getUsuarios(): void{
  //   this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
  //     map( actions => actions.map(a => a.payload.doc.data() as Usuario))
  //   )
  // }

  saveUsuario(usuario: Usuario): Promise<void>{
    return new Promise( async (resolve, reject)=>{
      try{
        const id = this.afs.createId();
        const data = {id, ...usuario};
        const result = this.usuariosCollection.doc(id).set(data);
        resolve(result);
      }catch( err ){
        reject(err.message);
      }
    })
  }
}
