import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDocs, orderBy, query, QueryDocumentSnapshot, setDoc, where } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataqueryService {

  constructor(private firestore: Firestore) { }

  getObraSociales() {
    const col = collection(this.firestore, 'obrasSociales');
    const observable = collectionData(col);

    return observable;
  }

  getEspecialidades() {
    const col = collection(this.firestore, 'especialidades');
    const observable = collectionData(col);

    return observable;
  }

  async getProxIdEspecialidades() {
    const col = collection(this.firestore, 'especialidades');
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

  async altaEspecialidad(especialidad: string) {
    const proximoId = await this.getProxIdEspecialidades();
    const col = collection(this.firestore, 'especialidades');
    addDoc(col, { id: proximoId, nombre: especialidad.toLowerCase()});
  }

  traerUsuarios(){
    const col = collection(this.firestore, 'usuarios');
    const observable = collectionData(col);

    return observable;
  }

  async getPacientes(): Promise<any[]> {
    const col = collection(this.firestore, 'usuarios');
    const q = query(col, where('perfil', '==', 'paciente'));
    const querySnapshot = await getDocs(q);
    const pacientes: any[] = [];
    
    querySnapshot.forEach((doc: QueryDocumentSnapshot<any>) => {
      pacientes.push(doc.data());
    });

    return pacientes;
  }

  async cambiarEstadoUsuario(uid: string, estado:boolean) {
    // Define la referencia a la colección 'usuarios'
    const col = collection(this.firestore, 'usuarios');
    const q = query(col, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return false;
    }
  
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;
      // Actualiza el campo 'estado' a true
      await setDoc(userRef, { estado: estado }, { merge: true });
    });
    return true;
  }

  async setHorarios(especialista: any, diasDeTrabajo: any, horaInicio: any, horaFin: any){
    // Define la referencia a la colección 'usuarios'
    const col = collection(this.firestore, 'usuarios');
    const q = query(col, where('uid', '==', especialista.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return false;
    }
  
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;
      // Actualiza el campo 'estado' a true
      await setDoc(userRef, { diasAtencion: diasDeTrabajo, horaInicio: horaInicio, horaFin: horaFin }, { merge: true });
    });
    return true;
  }

}
