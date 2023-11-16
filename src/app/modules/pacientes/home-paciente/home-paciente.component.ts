import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, combineLatest, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { TurnoService } from 'src/app/services/turno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent {
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
      especialista: [''],
      especialidad: [''],
    });

    this.isLoading = true;
    
    const turnos$ = this.turnoService.getTurnos();
    const especialistas$ = this.turnoService.getEspecialistas();
    this.authService.getLoggedUser().subscribe((user) => {
      this.usuarioLogueado = user;
    });
    combineLatest([turnos$, especialistas$, this.authService.getLoggedUser()]).pipe(
      map(([turnos, especialistas, usuarioLogueado]) => {
        return turnos
          .filter((turno: any) => turno.uidPaciente === usuarioLogueado?.uid)
          .map((turno: any) => {
            const especialista = especialistas.find((e: any) => e.uid === turno.uidEspecialista);
    
            return {
              ...turno,
              nombreEspecialista: especialista ? `${especialista.apellido}, ${especialista.nombre}` : 'Especialista no encontrado',
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

      const especialistaCumple = (
        typeof turno.nombreEspecialista === 'string' &&
        turno.nombreEspecialista.toLowerCase().includes(filtro.especialista?.toLowerCase())
      );

      return especialidadCumple && especialistaCumple;
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
