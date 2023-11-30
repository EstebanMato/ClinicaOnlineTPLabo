import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { DataqueryService } from 'src/app/services/dataquery.service';

@Component({
  selector: 'app-perfil-especialista',
  templateUrl: './perfil-especialista.component.html',
  styleUrls: ['./perfil-especialista.component.css']
})
export class PerfilEspecialistaComponent implements OnInit{
  isLoading = false;
  usuario: any;
  constructor(private authService: AuthService, private dataqueryServcie: DataqueryService){}

  diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  diasDeTrabajo: any = []
  editando = false;

  horaInicio: any;
  horaFin: any;

  toggleDia(dia: string): void {

    const index = this.diasDeTrabajo.indexOf(dia);
    if (index === -1) {
      this.diasDeTrabajo.push(dia);
    } else {
      this.diasDeTrabajo.splice(index, 1);
    }

    this.diasDeTrabajo.sort((a: string, b: string) => {
      const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      return diasSemana.indexOf(a) - diasSemana.indexOf(b);
    });
  }

  editar(){
    if(this.editando)
      this.editando=false;
    else
    this.editando=true;
  }

  guardar(){
    this.isLoading = true;
    this.dataqueryServcie.setHorarios(this.usuario, this.diasDeTrabajo, this.horaInicio, this.horaFin).then(()=>{this.editar(); this.isLoading = false;})
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.getLoggedUser().subscribe((user)=>{
      if(!user)
      return
      this.authService.getUsuarioPorUid(user.uid).subscribe((user)=>{
        this.usuario=user[0]; this.isLoading=false; 
        this.diasDeTrabajo = this.usuario.diasAtencion
        this.horaInicio = this.usuario.horaInicio
        this.horaFin = this.usuario.horaFin
        
      })
      
    })
  }
}
