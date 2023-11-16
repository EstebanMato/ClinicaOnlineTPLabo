import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, combineLatest, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { TurnoService } from 'src/app/services/turno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-especialistas',
  templateUrl: './home-especialistas.component.html',
  styleUrls: ['./home-especialistas.component.css']
})
export class HomeEspecialistasComponent {
  filtroForm!: FormGroup;
  isLoading = false;
  turnosDetallado: any;
  turnosFiltrado: any;
  turnos: any;
  usuarioLogueado: any;
  private formSubscription!: Subscription;

  constructor(private turnoService: TurnoService, private dataquery: DataqueryService, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.filtroForm = this.formBuilder.group({
      paciente: [''],
      especialidad: [''],
    });

    this.isLoading = true;
    
    const turnos$ = this.turnoService.getTurnos();
    const pacientes$ = this.turnoService.getPacientes();
    this.authService.getLoggedUser().subscribe((user) => {
      this.usuarioLogueado = user;
    });
    combineLatest([turnos$, pacientes$, this.authService.getLoggedUser()]).pipe(
      map(([turnos, pacientes, usuarioLogueado]) => {
        return turnos
          .filter((turno: any) => turno.uidEspecialista === usuarioLogueado?.uid)
          .map((turno: any) => {
            const paciente = pacientes.find((e: any) => e.uid === turno.uidPaciente);
    
            return {
              ...turno,
              nombrePaciente: paciente ? `${paciente.apellido}, ${paciente.nombre}` : 'Paciente no encontrado',
            };
          });
      })
    ).subscribe((turnosDetallado) => {
      this.turnosDetallado = turnosDetallado;
      this.turnosFiltrado = this.turnosDetallado;
      this.isLoading = false;
    });
    

    this.formSubscription = this.filtroForm.valueChanges.subscribe((filtro) => {
      this.turnosFiltrado = this.filtrarTurnos(this.turnosDetallado, filtro);
    });
  }

  filtrarTurnos(turnos: any[], filtro: any): any[] {

    if (!turnos || typeof filtro.especialidad !== 'string') {
      return [];
    }

    return turnos.filter((turno) => {
      const especialidadCumple = (
        typeof turno.especialidad === 'string' &&
        turno.especialidad.toLowerCase().includes(filtro.especialidad?.toLowerCase())
      );

      const pacienteCumple = (
        typeof turno.nombrePaciente === 'string' &&
        turno.nombrePaciente.toLowerCase().includes(filtro.paciente?.toLowerCase())
      );

      return especialidadCumple && pacienteCumple;
    });
  }

  getColorPorEstado(estado: string): string {
    switch (estado) {
      case 'confirmado':
        return 'badge rounded-pill text-bg-success';
        case 'finalizado':
        return 'badge rounded-pill text-bg-warning';
      case 'cancelado':
        return 'badge rounded-pill text-bg-danger';
      case 'rechazado':
        return 'badge rounded-pill text-bg-danger';
      case 'pendiente':
        return 'badge rounded-pill text-bg-secondary';

      default:
        return 'badge rounded-pill text-bg-muted'; // Clase de Bootstrap para texto gris por defecto
    }
  }

  cancelarTurno(turno: any) {
    Swal.fire({
      title: '¿Desea cancelar?',
      html: `
      Detalles del turno
      <p>Paciente: ${turno.nombrePaciente}</p>
      <p>Especialidad: ${turno.especialidad}</p>
      <p>Fecha: ${turno.fecha}</p>
      <p>Hora de Inicio: ${turno.horaInicio}</p>
    `,
      input: 'text',
      inputPlaceholder: 'Ingrese el motivo de la cancelación',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Sí, cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async (motivo) => {
        console.log(turno.id, motivo)
        this.turnoService.cancelarTurno(turno.id,motivo)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario confirmó la cancelación
        Swal.fire('Cancelado', 'La acción fue cancelada.', 'success');
      }
    });
  }


  confirmarTurno(turno: any) {
    Swal.fire({
      title: '¿Confirmar?',
      html: `
        Detalles del turno
        <p>Paciente: ${turno.nombrePaciente}</p>
        <p>Especialidad: ${turno.especialidad}</p>
        <p>Fecha: ${turno.fecha}</p>
        <p>Hora de Inicio: ${turno.horaInicio}</p>
      `,
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Sí, confirmar',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        this.turnoService.confirmarTurno(turno.id)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario confirmó la cancelación
        Swal.fire('Confirmado', 'El turno fue confirmado.', 'success');
      }
    });
  }

  calificarTurno(turno: any){
    Swal.fire({
      title: 'Calificar atención',
      input: 'text',
      html: '<input type="range" id="calificacion" name="calificacion" min="1" max="5">',
      inputPlaceholder: '¿Como estuvo la atención?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      showLoaderOnConfirm: true,
      preConfirm: async (motivo) => {
        const calificacion = (document.getElementById('calificacion') as HTMLInputElement).value;
        console.log(turno.id, motivo, calificacion)

        this.turnoService.calificarTurno(turno.id,motivo,calificacion)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Gracias', 'Se envio la calificación', 'success');
      }
    });
  }

  finalizarTurno(turno: any) {
    Swal.fire({
      title: '¿Turno finalizado?',
      html: `
      Detalles del turno
      <p>Paciente: ${turno.nombrePaciente}</p>
      <p>Especialidad: ${turno.especialidad}</p>
      <p>Fecha: ${turno.fecha}</p>
      <p>Hora de Inicio: ${turno.horaInicio}</p>
    `,
      input: 'text',
      inputPlaceholder: 'Comentarios',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Sí, cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async (motivo) => {
        this.turnoService.finalizarTurno(turno.id,motivo)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario confirmó la cancelación
        Swal.fire('Finalizado', 'El turno fue finalizado.', 'success');
      }
    });
  }

  verComentariosTurno(turno: any) {
    let htmlContent = `
      <p><strong>Comentarios:</strong> ${turno.comentarios}</p>
      
    `;
  
    if (turno.resenia !== "") {
      htmlContent += `
      <p><strong>Reseña:</strong> ${turno.resenia}</p>
      `;
    }

    if (turno.calificacion !== "") {
      htmlContent += `
        <label for="calificacion">Calificación:</label>
        <input type="range" id="calificacion" name="calificacion" min="1" max="5" value="${turno.calificacion}" disabled>
      `;
    }
  
    Swal.fire({
      title: 'Comentarios',
      html: htmlContent,
      confirmButtonText: 'Cerrar',
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
}
