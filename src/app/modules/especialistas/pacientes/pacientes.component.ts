import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TurnoService } from 'src/app/services/turno.service';
import { fadeInUpAnimation } from 'src/app/components/animaciones/animaciones.animation';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
  animations: [fadeInUpAnimation]
})
export class PacientesComponent implements OnInit {

  isLoading = false;
  usuario: any;
  turnosDetallado: any;
  especialidadSeleccionada: any;
  arrayUidPacientes: any;
  arrayPacientes: any[] = [];
  pacienteSeleccionado: any;
  constructor(private turnoService: TurnoService, private authService: AuthService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.authService.getLoggedUser().subscribe((user) => {
      if (!user)
        return
      this.authService.getUsuarioPorUid(user.uid).subscribe((user) => { this.usuario = user[0]; this.isLoading = false; this.getTurnosAtendidos() })

    })
  }

  getTurnosAtendidos() {
    this.isLoading = true;
    const turnos$ = this.turnoService.getTurnos();
    const pacientes$ = this.turnoService.getPacientes();

    combineLatest([turnos$, pacientes$]).pipe(
      map(([turnos, pacientes]) => {
        return turnos
          .filter((turno: any) => turno.uidEspecialista === this.usuario?.uid && turno.estado === 'finalizado')
          .map((turno: any) => {
            const paciente = pacientes.find((e: any) => e.uid === turno.uidPaciente);

            return {
              ...turno,
              nombrepaciente: paciente ? `${paciente.apellido}, ${paciente.nombre}` : 'Paciente no encontrado',
            };
          });
      })
    ).subscribe((turnosDetallado) => {
      this.turnosDetallado = this.ordenarPorFecha(turnosDetallado);
      this.isLoading = false;
      this.arrayUidPacientes = this.getPacientesUnicos();
    });
  }

  getPacientesUnicos() {
    const pacientesArray: any[] = [];

    if (this.turnosDetallado) {
      this.turnosDetallado.forEach((turno: any) => {
        if (turno && turno.uidPaciente && !pacientesArray.includes(turno.uidPaciente)) {
          pacientesArray.push(turno.uidPaciente);
          this.authService.getUsuarioPorUid(turno.uidPaciente).subscribe((user) => {
            this.arrayPacientes.push(user[0])
          })
        }
      });
    }
    return pacientesArray;
  }


  ordenarPorFecha(turnosConFecha: any[]): any[] {
    turnosConFecha.sort((a, b) => {
      const dateA = this.convertirAFecha(a.fecha);
      const dateB = this.convertirAFecha(b.fecha);

      return dateA.getTime() - dateB.getTime();
    });

    return turnosConFecha;
  }

  convertirAFecha(fechaString: string): Date {
    const partesFecha = fechaString.split('/');
    const fecha = new Date(
      parseInt(partesFecha[2]),
      parseInt(partesFecha[1]) - 1,
      parseInt(partesFecha[0])
    );
    return fecha;
  }

  // Función para obtener hasta tres turnos por paciente
  obtenerTresTurnosPorPaciente(pacienteUid: string): any[] {
    let contador = 0;
    return this.turnosDetallado.filter((turno: any) => {
      if (turno.uidPaciente === pacienteUid && contador < 3) {
        contador++;
        return true;
      }
      return false;
    });
  }

  historiaClinicaPaciente(paciente : any) {
    this.pacienteSeleccionado = paciente;
  }
}
