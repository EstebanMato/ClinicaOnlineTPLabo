import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-turno-paciente',
  templateUrl: './turno-paciente.component.html',
  styleUrls: ['./turno-paciente.component.css']
})
export class TurnoPacienteComponent implements OnInit {

  especialistas!: any[];
  especilidades: any;
  especialidadSeleccionada: any;
  turnos: Date[] = [];
  constructor(private turnoServices: TurnoService) { }

  ngOnInit(): void {
    this.turnoServices.getEspecialidades().subscribe((res) => {
      this.especilidades = res;
      console.log(this.especilidades)
    })
  }

  buscarPorEspecialidad() {
    this.turnoServices.getEspecialistas().subscribe((res) => {
      this.especialistas = [];
      const especialistas = res;
      for (let i = 0; i < especialistas.length; i++) {
        const especialista = especialistas[i];
        const especialidades = especialista.especialidad;

        for (let j = 0; j < especialidades.length; j++) {
          if (especialidades[j] == this.especialidadSeleccionada) {
            this.especialistas.push(especialistas[i])
          }
        }
      }
      console.log(this.especialistas)
    });
  }

  mostrarTurnos(horaInicio: string, horaFin: string, especialista: any) {
    let fechaManana = new Date(Date.now());
    fechaManana.setHours(0, 0, 0, 0);
    fechaManana.setDate(fechaManana.getDate() + 1);//generamos la fecha de mañana, para empezar a mostrar los turnos hasta dentro de 15 días

    // Parsear las cadenas en objetos Date
    let date1 = new Date(fechaManana);
    date1.setHours(parseInt(horaInicio.split(":")[0]), parseInt(horaInicio.split(":")[1]));

    let date2 = new Date(fechaManana);
    date2.setHours(parseInt(horaFin.split(":")[0]), parseInt(horaFin.split(":")[1]));
    let intervalo = 30;

    for (let i = 0; i < 3; i++) {
      while (date1 < date2) {
        const turno = new Date(date1);  // Crea una nueva instancia de Date
        console.log(
          `${turno.toLocaleDateString('es-ES', { weekday: 'long' })} ` +
          `${turno.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })} hora inicial, ` +
          `${date2.toLocaleDateString('es-ES', { weekday: 'long' })} ` +
          `${date2.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })} hora final`
        );

        this.turnos.push(turno , especialista);

        date1.setMinutes(date1.getMinutes() + intervalo);
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

    console.log(this.turnos, "Etos son los turnos que agendo")
  }
}
