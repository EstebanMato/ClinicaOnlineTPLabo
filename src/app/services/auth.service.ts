import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { addDoc, collection, Firestore, query, where, collectionData, serverTimestamp } from '@angular/fire/firestore'
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private firestore: Firestore) { }

  async registrarUsuario(email: string, password: string) {
    try {
      const userCredential = await this.afauth.createUserWithEmailAndPassword(email, password).then((user) => {
        this.enviarMail();
        return user;
      })
      return userCredential;
    } catch (error) {
      throw error;
    }
  }

  async ingresar(email: string, password: string) {
    try {
      const user = await this.afauth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  logOut() {
    this.afauth.signOut();
  }

  getLoggedUser() {
    return this.afauth.authState;
  }

  getUsuarioPorUid(uid: string) {
    const col = collection(this.firestore, 'usuarios');
    const q = query(col, where('uid', '==', uid))

    return collectionData(q).pipe(first());
  }

  altaPaciente(nombre: string, apellido: string, dni: string, fechaNacimiento: string, mail: string, password: string, uid: string | undefined, obraSocial: string, imagen: any[]) {
    const col = collection(this.firestore, 'usuarios');
    addDoc(col, {
      nombre: nombre, apellido: apellido, dni: dni, fechaNacimiento: fechaNacimiento, mail: mail, password: password, uid: uid,
      obraSocial: obraSocial, imagen: imagen, perfil: "paciente", estado: true
    });
  }

  altaEspecialista(nombre: string, apellido: string, dni: string, fechaNacimiento: string, mail: string, password: string, uid: string | undefined, especialidad: any[], imagen: string) {
    const col = collection(this.firestore, 'usuarios');
    addDoc(col, {
      nombre: nombre, apellido: apellido, dni: dni, fechaNacimiento: fechaNacimiento, mail: mail, password: password, uid: uid,
      especialidad: especialidad, imagen: imagen, perfil: "especialista", estado: false, horaInicio: "00:00", horaFin: "00:00", diasAtencion: ['Lunes','Martes']
    });
  }

  altaAdmin(nombre: string, apellido: string, dni: string, fechaNacimiento: string, mail: string, password: string, uid: string | undefined, imagen: string) {
    const col = collection(this.firestore, 'usuarios');
    addDoc(col, { nombre: nombre, apellido: apellido, dni: dni, fechaNacimiento: fechaNacimiento, mail: mail, password: password, uid: uid, imagen: imagen, perfil: "admin", estado: true });
  }

  enviarMail() {
    this.afauth.currentUser
      .then((user) => {
        if (user) {
          user.sendEmailVerification()
            .then(() => {//aca ya envio el mail, si necesito hacer algo más justo despues de enviar el mail lo puedo ver acá 
            })
            .catch((error) => {
              console.error('Error al enviar el correo de verificación:', error);
            });
        } else {
          console.error('Usuario no válido o nulo.');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el usuario actual:', error);
      });
  }

  guardarLog(uid: string){
    const fechaActual = serverTimestamp();
    const col =collection(this.firestore, 'logs' );
    addDoc(col, {uid: uid, fecha:fechaActual});
  }

  getLogs() {
    const col = collection(this.firestore, 'logs');
    const observable = collectionData(col);

    return observable;
  }
}
