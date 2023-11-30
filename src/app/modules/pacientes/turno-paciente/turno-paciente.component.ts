import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TurnoService } from 'src/app/services/turno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turno-paciente',
  templateUrl: './turno-paciente.component.html',
  styleUrls: ['./turno-paciente.component.css']
})
export class TurnoPacienteComponent implements OnInit {

  turnoSeleccionado = {
    uidPaciente: '',
    uidEspecialista: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    estado: '',
    comentarios: '',
    calificacion: '',
    especialidad: '',

  }
  especialistaSeleccionado!: any;
  especialistas!: any[];
  especialidadesDisponibles!: any[]
  especialidades: any;
  turnosOcupados: any[] = [];
  especialidadSeleccionada: any;

  paciente: any;
  intervalo = 30;
  turnos: any[] = [];
  fechaActual!: any;
  constructor(private turnoService: TurnoService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.turnoService.getEspecialidades().subscribe((res) => {
      this.especialidades = res;

    })
    this.authService.getLoggedUser().subscribe((user) => {
      this.paciente = user;
    })
    this.turnoService.getTurnos().subscribe((res) => {
      this.turnosOcupados = res;
    })
    this.turnoService.getEspecialistas().subscribe((res) => {

      this.especialistas = res

    })
  }

  mostrarEspecialidades(especialista: any) {
    this.turnos = [];
    this.especialistaSeleccionado = especialista;
    this.especialidadesDisponibles = especialista.especialidad
  }

  mostrarImagenPorDefecto(event: Event) {
    (event.target as HTMLImageElement).src = 'https://firebasestorage.googleapis.com/v0/b/clinicaonlineutn.appspot.com/o/especialidades%2Ffarmacia.png?alt=media&token=91fb52dd-8578-4f52-aaf3-365695e02266';
  }

  buscarTurnos(especialidad: any) {
    this.especialidadSeleccionada = especialidad;
    this.turnos = [];
    this.mostrarTurnos(this.especialistaSeleccionado.horaInicio, this.especialistaSeleccionado.horaFin, this.especialistaSeleccionado);
  }

  mostrarTurnos(horaInicio: string, horaFin: string, especialista: any) {
    let coincide = false;
    let fechaManana = new Date(Date.now());
    fechaManana.setHours(0, 0, 0, 0);
    fechaManana.setDate(fechaManana.getDate() + 1);
    // Parsear las cadenas en objetos Date
    let date1 = new Date(fechaManana);
    date1.setHours(parseInt(horaInicio.split(":")[0]), parseInt(horaInicio.split(":")[1]));

    let date2 = new Date(fechaManana);
    date2.setHours(parseInt(horaFin.split(":")[0]), parseInt(horaFin.split(":")[1]));

    if (especialista.estado) {

      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < especialista.diasAtencion.length; j++) {
          while (date1 < date2) {
            const turno = new Date(date1);
            if (turno.toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase() == (especialista.diasAtencion[j]).toLowerCase()) {
              var turnoEspecialista = {
                turno: turno,
                especialista: especialista
              };

              for (let i = 0; i < this.turnosOcupados.length; i++) {

                if (this.turnosOcupados[i].uidEspecialista == turnoEspecialista.especialista.uid) {

                  const [dia, mes, anio] = this.turnosOcupados[i].fecha.split('/');
                  const [horaInicio, minutoInicio] = this.turnosOcupados[i].horaInicio.split(':');
                  const [horaFin, minutoFin] = this.turnosOcupados[i].horaFin.split(':');

                  const fechaInicioTurnoOcupado = new Date(Number(anio), Number(mes) - 1, Number(dia), Number(horaInicio), Number(minutoInicio));
                  const fechaFinTurnoOcupado = new Date(Number(anio), Number(mes) - 1, Number(dia), Number(horaFin), Number(minutoFin));

                  const fechaFin = new Date(turnoEspecialista.turno);
                  fechaFin.setMinutes(fechaFin.getMinutes() + this.intervalo);

                  const seSuperponen =
                    (turnoEspecialista.turno >= fechaInicioTurnoOcupado && turnoEspecialista.turno < fechaFinTurnoOcupado) ||
                    (fechaFin > fechaInicioTurnoOcupado && fechaFin <= fechaFinTurnoOcupado);

                  if (seSuperponen) {

                    coincide = true;
                    break;
                  }
                }
              }
              if (!coincide) {
                this.turnos.push(turnoEspecialista);
              }
              coincide = false;
            }
            date1.setMinutes(date1.getMinutes() + this.intervalo);
          }
          //aca tengo que reiniciar los date1 y date2 , para volver a evaluar la siguiente especialidad 
          date1.setHours(parseInt(horaInicio.split(":")[0]), parseInt(horaInicio.split(":")[1]));
          date2.setHours(parseInt(horaFin.split(":")[0]), parseInt(horaFin.split(":")[1]));
        }
        // Avanzar al día siguiente a las 00:00
        date1.setDate(date1.getDate() + 1);
        date1.setHours(0, 0, 0, 0);
        date2.setDate(date2.getDate() + 1);
        date2.setHours(0, 0, 0, 0);

        // Configurar horaInicio y horaFin para el siguiente día
        date1.setHours(parseInt(horaInicio.split(":")[0]), parseInt(horaInicio.split(":")[1]));
        date2.setHours(parseInt(horaFin.split(":")[0]), parseInt(horaFin.split(":")[1]));
      }
    }
  }

  formatoHora(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${day}-${month} ${hours}:${minutes}`;
  }

  reservarTurno(turno: any) {
    //variables de uso
    const fecha = new Date(turno.turno);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const horaInicio = `${fecha.getHours()}:${String(fecha.getMinutes()).padStart(2, '0')}`;

    const fechaFin = new Date(fecha);
    fechaFin.setMinutes(fechaFin.getMinutes() + this.intervalo);
    const horaFin = `${fechaFin.getHours()}:${String(fechaFin.getMinutes()).padStart(2, '0')}`;


    //asignamos datos al turno
    this.turnoSeleccionado.uidPaciente = this.paciente.uid;
    this.turnoSeleccionado.uidEspecialista = turno.especialista.uid;
    this.turnoSeleccionado.fecha = `${dia}/${mes}/${año}`;
    this.turnoSeleccionado.horaInicio = horaInicio;
    this.turnoSeleccionado.horaFin = horaFin;
    this.turnoSeleccionado.estado = 'pendiente';
    this.turnoSeleccionado.especialidad = this.especialidadSeleccionada;

    this.confirmarTurno(this.turnoSeleccionado, turno);

  }

  confirmarTurno(detallesTurno: any, turno: any) {
    Swal.fire({
      title: 'Detalles del Turno',
      html: `
        <p>Especialista: ${turno.especialista.apellido}, ${turno.especialista.nombre}</p>
        <p>Fecha: ${detallesTurno.fecha}</p>
        <p>Hora de Inicio: ${detallesTurno.horaInicio}</p>
        <p>Hora de Fin: ${detallesTurno.horaFin}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirmar Turno',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        this.turnoService.crearTurno(this.turnoSeleccionado)
      },

      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      // Verificar si se confirmó el turno
      if (result.isConfirmed) {
        Swal.fire('¡Turno Confirmado!', 'Se confirmo el turno correctamente.', 'success');
        this.router.navigate(['/home/paciente']);
      } else if (result.isDismissed && result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'La reserva del turno fue cancelada', 'info');
      }
    });
  }

}
