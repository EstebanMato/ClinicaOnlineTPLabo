import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, combineLatest, map } from 'rxjs';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { TurnoService } from 'src/app/services/turno.service';
import Swal from 'sweetalert2';
import { fadeInRightAnimation } from 'src/app/components/animaciones/animaciones.animation';


@Component({
  selector: 'app-turno-mostrar',
  templateUrl: './turno-mostrar.component.html',
  styleUrls: ['./turno-mostrar.component.css'],
  animations: [fadeInRightAnimation]
})
export class TurnoMostrarComponent implements OnInit {

  filtroForm!: FormGroup;
  isLoading = false;
  turnosDetallado: any;
  turnosFiltrado: any;
  turnos: any;
  especialistas: any;
  pacientes: any;
  private formSubscription!: Subscription;

  constructor(private turnoService: TurnoService, private dataquery: DataqueryService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filtroForm = this.formBuilder.group({
      filtrar: [''],
    });

    this.isLoading = true;
    const turnos$ = this.turnoService.getTurnos();
    const especialistas$ = this.turnoService.getEspecialistas();
    const pacientesPromise = this.dataquery.getPacientes();

    combineLatest([turnos$, especialistas$, pacientesPromise]).pipe(
      map(([turnos, especialistas, pacientes]) => {
        return turnos.map((turno: any) => {
          const especialista = especialistas.find((e: any) => e.uid === turno.uidEspecialista);
          const paciente = pacientes.find((p: any) => p.uid === turno.uidPaciente);

          return {
            ...turno,
            nombreEspecialista: especialista ? `${especialista.apellido}, ${especialista.nombre}` : 'Especialista no encontrado',
            nombrePaciente: paciente ? `${paciente.apellido}, ${paciente.nombre}` : 'Paciente no encontrado',
          };
        });
      })
    ).subscribe((turnosDetallado) => {
      this.turnosDetallado = this.ordenarPorFecha(turnosDetallado);
      this.turnosFiltrado = this.turnosDetallado;
      this.isLoading = false;
    });

    this.formSubscription = this.filtroForm.valueChanges.subscribe((filtro) => {
      this.turnosFiltrado = this.filtrarTurnos(this.turnosDetallado, filtro);
    });
  }

  ordenarPorFecha(turnosConFecha: any[]): any[] {
    turnosConFecha.sort((a, b) => {
      const dateA = this.convertirAFecha(a.fecha);
      const dateB = this.convertirAFecha(b.fecha);

      return dateA.getTime() - dateB.getTime();
    });

    return turnosConFecha;
  }

  private convertirAFecha(fechaString: string): Date {
    const partesFecha = fechaString.split('/');
    const fecha = new Date(
      parseInt(partesFecha[2]),
      parseInt(partesFecha[1]) - 1,
      parseInt(partesFecha[0])
    );
    return fecha;
  }

  filtrarTurnos(turnos: any[], filtro: any): any[] {
    return this.turnoService.filtrarTurnos(turnos,filtro)
  }

  verComentariosTurno(turno: any) {
    console.log(turno)
    let htmlContent = `
      <p><strong>Comentarios:</strong> ${turno.comentarios}</p>
      
    `;

    if (turno.datosFijos) {
      if (turno.datosFijos.altura !== "") {
        htmlContent += `
          <p><strong>Altura:</strong> ${turno.datosFijos.altura}</p>
          `;
      }
      if (turno.datosFijos.peso !== "") {
        htmlContent += `
          <p><strong>Peso:</strong> ${turno.datosFijos.peso}</p>
          `;
      }
      if (turno.datosFijos.presion !== "") {
        htmlContent += `
          <p><strong>Presion:</strong> ${turno.datosFijos.presion}</p>
          `;
      }
      if (turno.datosFijos.temperatura !== "") {
        htmlContent += `
          <p><strong>Temperatura:</strong> ${turno.datosFijos.temperatura}</p>
          `;
      }
      if (turno.datosFijos.diagnostico !== "") {
        htmlContent += `
          <p><strong>Diagnostico:</strong> ${turno.datosFijos.diagnostico}</p>
          `;
      }
    }

    if (turno.datosDinamicos) {
      if (turno.datosDinamicos.dato1.nombre !== "") {
        htmlContent += `
          <p><strong>${turno.datosDinamicos.dato1.nombre}:</strong> ${turno.datosDinamicos.dato1.valor}</p>
          `;
      }
      if (turno.datosDinamicos.dato2.nombre !== "") {
        htmlContent += `
          <p><strong>${turno.datosDinamicos.dato2.nombre}:</strong> ${turno.datosDinamicos.dato2.valor}</p>
          `;
      }
      if (turno.datosDinamicos.dato3.nombre !== "") {
        htmlContent += `
          <p><strong>${turno.datosDinamicos.dato3.nombre}:</strong> ${turno.datosDinamicos.dato3.valor}</p>
          `;
      }
    }


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

  getColorPorEstado(estado: string): string {
    switch (estado) {
      case 'confirmado':
        return 'badge rounded-pill text-bg-success';
      case 'cancelado':
        return 'badge rounded-pill text-bg-danger';
      case 'rechazado':
        return 'badge rounded-pill text-bg-danger';
      case 'pendiente':
        return 'badge rounded-pill text-bg-secondary';
      case 'finalizado':
        return 'badge rounded-pill text-bg-warning';

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
        this.turnoService.cancelarTurno(turno.id, motivo)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario confirmó la cancelación
        Swal.fire('Cancelado', 'El turno fue cancelado.', 'success');
      }
    });
  }
}
