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

  getTurnosPendientes() {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where("estado", "==", "pendiente"));
    const observable = collectionData(q);

    return observable;
  }

  getTurnosFinalizados() {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where("estado", "==", "finalizado"));
    const observable = collectionData(q);

    return observable;
  }

  getTurnosActivos() {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where("estado", "!=", "cancelado"));
    const observable = collectionData(q);

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

  async finalizarTurno(id: string, datosFijos:any, datosDinamicos: any, comentarios: any) {
    const col = collection(this.firestore, 'turnos');
    const q = query(col, where('id', '==', id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return false;
    }
  
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;
      await setDoc(userRef, { estado: 'finalizado' , comentarios: comentarios, datosFijos: datosFijos, datosDinamicos: datosDinamicos }, { merge: true });
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

  
  filtrarTurnos(turnos: any[], filtro: any): any[] {

    if (!turnos || typeof filtro.filtrar !== 'string') {
      return [];
    }

    return turnos.filter((turno) => {
      const especialidadCumple = (
        typeof turno.especialidad.nombre === 'string' &&
        turno.especialidad.nombre.toLowerCase().includes(filtro.filtrar?.toLowerCase())
      );


      const especialistaCumple = (
        turno.nombreEspecialista && (

          typeof turno.nombreEspecialista === 'string' &&
          turno.nombreEspecialista.toLowerCase().includes(filtro.filtrar?.toLowerCase())
          )
      );

      const pacienteCumple = (
        turno.nombrePaciente && (

          typeof turno.nombrePaciente === 'string' &&
          turno.nombrePaciente.toLowerCase().includes(filtro.filtrar?.toLowerCase())
          )
      );
      

      const fechaCumple = (
        typeof turno.fecha === 'string' &&
        turno.fecha.toLowerCase().includes(filtro.filtrar?.toLowerCase())
      );

      const horaCumple = (
        typeof turno.horaInicio === 'string' &&
        turno.horaInicio.toLowerCase().includes(filtro.filtrar?.toLowerCase())
      );

      const estadoCumple = (
        typeof turno.estado === 'string' &&
        turno.estado.toLowerCase().includes(filtro.filtrar?.toLowerCase())
      );

      const datoDinamicoCumple =
        turno.datosDinamicos &&
        (
          (typeof turno.datosDinamicos.dato1?.nombre === 'string' &&
            turno.datosDinamicos.dato1.nombre.toLowerCase().includes(filtro.filtrar?.toLowerCase())) ||
          (typeof turno.datosDinamicos.dato2?.nombre === 'string' &&
            turno.datosDinamicos.dato2.nombre.toLowerCase().includes(filtro.filtrar?.toLowerCase())) ||
          (typeof turno.datosDinamicos.dato3?.nombre === 'string' &&
            turno.datosDinamicos.dato3.nombre.toLowerCase().includes(filtro.filtrar?.toLowerCase())) ||
          (typeof turno.datosDinamicos.dato1?.valor === 'string' &&
            turno.datosDinamicos.dato1.valor.toLowerCase().includes(filtro.filtrar?.toLowerCase())) ||
          (typeof turno.datosDinamicos.dato2?.valor === 'string' &&
            turno.datosDinamicos.dato2.valor.toLowerCase().includes(filtro.filtrar?.toLowerCase())) ||
          (typeof turno.datosDinamicos.dato3?.valor === 'string' &&
            turno.datosDinamicos.dato3.valor.toLowerCase().includes(filtro.filtrar?.toLowerCase()))
        );



      const datoFijoCumple =
        turno.datosFijos &&
        (
          (typeof turno.datosFijos.altura === 'number' &&
            turno.datosFijos.altura.toString().includes(filtro.filtrar)) ||
          (typeof turno.datosFijos.diagnostico === 'string' &&
            turno.datosFijos.diagnostico.toLowerCase().includes(filtro.filtrar?.toLowerCase())) ||
          (typeof turno.datosFijos.peso === 'number' &&
            turno.datosFijos.peso.toString().includes(filtro.filtrar)) ||
          (typeof turno.datosFijos.presion === 'number' &&
            turno.datosFijos.presion.toString().includes(filtro.filtrar)) ||
          (typeof turno.datosFijos.temperatura === 'number' &&
            turno.datosFijos.temperatura.toString().includes(filtro.filtrar))
        );

      return especialidadCumple || pacienteCumple || especialistaCumple || fechaCumple || horaCumple || estadoCumple || datoDinamicoCumple || datoFijoCumple;
    });
  }
}
