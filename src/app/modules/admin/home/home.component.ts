import { Component, OnInit } from '@angular/core';
import { DataqueryService } from 'src/app/services/dataquery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  usuarios: any[] = [];
  isLoading = false

  constructor(private dataq: DataqueryService){}

  ngOnInit(): void {
    this.isLoading = true;
    this.dataq.traerUsuarios().subscribe((res)=>{

      this.usuarios = res;
      this.isLoading = false;
    });
  }

  habilitarUsuario(usuario:any){
    this.isLoading=true;
    this.dataq.habilitarUsuario(usuario).then((res)=>{
      this.isLoading=false;
    })
  }
}
