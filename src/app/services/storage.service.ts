import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageRef = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre:string, imgBase64:any, ruta:string){

    try{
      let res = await this.storageRef.child(ruta+"/"+nombre).putString(imgBase64, 'data_url');
      return await res.ref.getDownloadURL();
    }catch(err)
    {
      console.log(err)
      return null;
    }
  }
}
