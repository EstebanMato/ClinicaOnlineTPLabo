import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, combineLatest, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { TurnoService } from 'src/app/services/turno.service';
import Swal from 'sweetalert2';
import { fadeInUpAnimation } from 'src/app/components/animaciones/animaciones.animation';
import { fadeInRightAnimation } from 'src/app/components/animaciones/animaciones.animation';


@Component({
  selector: 'app-home-especialistas',
  templateUrl: './home-especialistas.component.html',
  styleUrls: ['./home-especialistas.component.css'],
  animations: [fadeInUpAnimation, fadeInRightAnimation]
})
export class HomeEspecialistasComponent {
  filtroForm!: FormGroup;
  isLoading = false;
  turnosDetallado: any;
  turnosFiltrado: any;
  turnos: any;
  usuarioLogueado: any;
  comentarios: any;
  turnoSeleccionado: any;
  private formSubscription!: Subscription;

  datosFijos = {
    altura: '',
    peso: '',
    temperatura: '',
    presion: '',
    diagnostico: ''
  }

  datosDinamicos = {
    dato1: { nombre: '', valor: '' },
    dato2: { nombre: '', valor: '' },
    dato3: { nombre: '', valor: '' }
  };

  constructor(private turnoService: TurnoService, private dataquery: DataqueryService, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.filtroForm = this.formBuilder.group({
      filtrar: [''],
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
    return this.turnoService.filtrarTurnos(turnos, filtro)
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
      <p>Especialidad: ${turno.especialidad.nombre}</p>
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
        this.turnoService.cancelarTurno(turno.id, motivo)
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
        <p>Especialidad: ${turno.especialidad.nombre}</p>
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

  calificarTurno(turno: any) {
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

        this.turnoService.calificarTurno(turno.id, motivo, calificacion)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Gracias', 'Se envio la calificación', 'success');
      }
    });
  }

  abrirFinalizarTurnoModal(turno: any) { this.turnoSeleccionado = turno; console.log(this.turnoSeleccionado) }

  finalizarTurno(turno: any) {
    this.turnoService.finalizarTurno(turno.id, this.datosFijos, this.datosDinamicos, this.comentarios);

    console.log(this.turnoSeleccionado)
    console.log(this.datosDinamicos)
    console.log(this.datosFijos)
    Swal.fire('Finalizado', 'El turno fue finalizado.', 'success');

  }

  verComentariosTurno(turno: any) {
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
}
