import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { forkJoin, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-logs-usuarios',
  templateUrl: './logs-usuarios.component.html',
  styleUrls: ['./logs-usuarios.component.css']
})
export class LogsUsuariosComponent implements OnInit {

  isLoading = false;
  logs: any;
  usuarios: any;
  logsConUsuarioInfo: { nombre: string; apellido: string; dia: string; horario: string, fecha: Date }[] = [];

  constructor(private authService: AuthService, private dataquery: DataqueryService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.isLoading=true;
    forkJoin([
      this.dataquery.traerUsuarios().pipe(take(1)),
      this.authService.getLogs().pipe(take(1))
    ]).subscribe(([usuarios, logs]) => {
      this.usuarios = usuarios;
      this.logs = logs;
      console.log(this.usuarios);
      console.log(this.logs);
      this.combinaInfoUsuariosLogs();
      this.isLoading = false;
    });
  }

  combinaInfoUsuariosLogs() {
    this.logs.forEach((log: any) => {
      const usuario = this.usuarios.find((user: any) => user.uid === log.uid);
      if (usuario) {
        const { nombre, apellido } = usuario;
        const fecha = (log.fecha as Timestamp).toDate();
        const dia = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
        const horario = `${fecha.getHours() < 10 ? '0' + fecha.getHours() : fecha.getHours()}:${fecha.getMinutes() < 10 ? '0' + fecha.getMinutes() : fecha.getMinutes()}`;
  
        // Almacenar fecha como objeto Date en logsConUsuarioInfo
        this.logsConUsuarioInfo.push({ nombre, apellido, dia, horario, fecha: fecha });
      }
    });
  
    // Ordenar logsConUsuarioInfo por fecha
    this.logsConUsuarioInfo.sort((a: any, b: any) => {
      const dateA = new Date(a.fecha);
      const dateB = new Date(b.fecha);
      return dateB.getTime() - dateA.getTime(); // Comparar utilizando getTime()
    });
  }

  descargarExcel(){
    this.excelService.exportarExcel(this.logsConUsuarioInfo,'log-usuarios')
  }
  
}
