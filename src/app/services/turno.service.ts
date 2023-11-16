import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDocs, orderBy, query, setDoc, where } from '@angular/fire/firestore'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private firestore: Firestore) { }

  getEspecialidades() {
    const col = collection(this.firestore, 'especialidades');
    const observable = collectionData(col);

    return observable;
  }

  getEspecialistas(): Observable<any[]> {
    const col = collection(this.firestore, 'usuarios');
    const q = query(col, where("perfil", "==", "especialista"), where("estado", "==", true));
    const observable = collectionData(q);

    return observable;
  }

  getPacientes(): Observable<any[]> {
    const col = collection(this.firestore, 'usuarios');
    const q = query(col, where("perfil", "==", "paciente"), where("estado", "==", true));
    const observable = collectionData(q);

    return observable;
  }

  getTurnos() {
    const col = collection(this.firestore, 'turnos');
    const observable = collectionData(col);

    return observable;
  }

  async crearTurno(turno: any) {
    const proximoId= await this.getProxIdTurno();
    const col = collection(this.firestore, 'turnos');
    addDoc(col, { id:proximoId, uidPaciente: turno.uidPaciente, uidEspecialista: turno.uidEspecialista, estado: turno.estado, fecha: turno.fecha, 
                  horaFin: turno.horaFin, horaInicio: turno.horaInicio, comentarios: turno.comentarios, calificacion: turno.calificacion, 
                  especialidad: turno.especialidad, resenia: ""});
  }

  async getProxIdTurno() {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, orderBy('id', 'desc'));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return 1; // Si no hay documentos, el próximo "id" será 1.
    } else {
      const ultimoDocumento = querySnapshot.docs[0];
      let ultimoId = ultimoDocumento.get('id');
      return ultimoId +1;
    }
  }

  async cancelarTurno(id: string, mensaje:string) {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return false;
    }
  
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;
      await setDoc(userRef, { estado: 'cancelado' , comentarios: mensaje }, { merge: true });
    });
    return true;
  }

  async finalizarTurno(id: string, mensaje:string) {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return false;
    }
  
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;
      await setDoc(userRef, { estado: 'finalizado' , comentarios: mensaje }, { merge: true });
    });
    return true;
  }

  async confirmarTurno(id: string) {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return false;
    }
  
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;
      await setDoc(userRef, { estado: 'confirmado'}, { merge: true });
    });
    return true;
  }

  async calificarTurno(id: string, mensaje:string, calificacion:string) {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return false;
    }
  
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;
      await setDoc(userRef, { resenia: mensaje, calificacion:calificacion }, { merge: true });
    });
    return true;
  }

}
