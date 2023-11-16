import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, combineLatest, map } from 'rxjs';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { TurnoService } from 'src/app/services/turno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turno-mostrar',
  templateUrl: './turno-mostrar.component.html',
  styleUrls: ['./turno-mostrar.component.css']
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
      especialidad: [''],
      especialista: [''],
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
        Swal.fire('Cancelado', 'El turno fue cancelado.', 'success');
      }
    });
  }
}
