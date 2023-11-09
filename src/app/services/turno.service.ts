import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDocs, orderBy, query, setDoc, where } from '@angular/fire/firestore'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private firestore: Firestore) { }

  getEspecialidades(){
    const col = collection(this.firestore, 'especialidades');
    const observable = collectionData(col);

    return observable;
  }

  getEspecialistas(): Observable<any[]> {
    const col = collection(this.firestore, 'usuarios');
    const q = query(col, where("perfil", "==", "especialista") , where("estado", "==", true));
    const observable = collectionData(q);

    return observable;
  }
}
