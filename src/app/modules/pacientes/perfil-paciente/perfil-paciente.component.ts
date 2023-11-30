import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TurnoService } from 'src/app/services/turno.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent implements OnInit {

  isLoading = false;
  usuario: any;
  turnosDetallado: any;
  arrayEspecialidades: any;
  especialidadSeleccionada: any;
  constructor(private turnoService: TurnoService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.getLoggedUser().subscribe((user) => {
      if (!user)
        return
      this.authService.getUsuarioPorUid(user.uid).subscribe((user) => { this.usuario = user[0]; this.isLoading = false; })
    })
  }

  filtrarPorEspecialidad() {
    this.isLoading = true;

    const turnos$ = this.turnoService.getTurnos();
    const especialistas$ = this.turnoService.getEspecialistas();

    combineLatest([turnos$, especialistas$]).pipe(
      map(([turnos, especialistas]) => {
        return turnos
          .filter((turno: any) => turno.uidPaciente === this.usuario?.uid && turno.estado === 'finalizado')
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
      this.isLoading = false;
      this.arrayEspecialidades = this.getEspecialidadesUnicas();
    });
  }

  getEspecialidadesUnicas() {
    const especialidadesArray: any[] = [];

    if (this.turnosDetallado) {
      this.turnosDetallado.forEach((turno: any) => {
        if (turno && turno.especialidad && turno.especialidad.nombre && !especialidadesArray.includes(turno.especialidad.nombre)) {
          especialidadesArray.push(turno.especialidad.nombre);
        }
      });
    }

    return especialidadesArray;
  }

  historiaClinicaEspecialidad(especialidad: string) {
    this.especialidadSeleccionada = especialidad;
  }

  descargarPdf() {
    const doc = new jsPDF();
    const margen = 10;
    let horizontal = margen;
    const alturaPagina = doc.internal.pageSize.getHeight();

    const logoClinica = 'assets/img/logo.png';
    const imgWidth = 50;
    const imgHeight = 50;
    const imgMargin = 10;
    doc.addImage(logoClinica, 'PNG', doc.internal.pageSize.getWidth() - imgWidth - imgMargin, imgMargin, imgWidth, imgHeight);
    doc.text(this.usuario.nombre + ', ' + this.usuario.apellido + '.' + ' Especialidad: ' + this.especialidadSeleccionada, margen, horizontal);

    const fechaHoy = new Date(); 

    const dia = fechaHoy.getDate().toString().padStart(2, '0');
    const mes = (fechaHoy.getMonth() + 1).toString().padStart(2, '0'); 
    const anio = fechaHoy.getFullYear(); 
    const fechaFormateada = `${dia}/${mes}/${anio}`; 
    horizontal += 10;

    doc.text('Fecha de emisión: ' + fechaFormateada, margen, horizontal); 


    let primeraPagina = true;

    this.turnosDetallado.forEach((turno: any, index: number) => {
      if (turno.especialidad.nombre === this.especialidadSeleccionada) {

        const textLines = [
          '-Fecha: ' + turno.fecha,
          '-Especialista: ' + turno.nombreEspecialista,
          '-Comentarios: ' + turno.comentarios,
          '-Datos: ',
          '  -Altura: ' + turno.datosFijos.altura,
          '  -Peso: ' + turno.datosFijos.peso,
          '  -Presion: ' + turno.datosFijos.presion,
          '  -Temperatura: ' + turno.datosFijos.temperatura,
          '  -Diagnostico: ' + turno.datosFijos.diagnostico,
        ];

        if (turno.datosDinamicos.dato1.nombre.trim() !== "") {
          const dato1Info = '-' + turno.datosDinamicos.dato1.nombre + ': ' + turno.datosDinamicos.dato1.valor;
          textLines.push(dato1Info);
        }
        if (turno.datosDinamicos.dato2.nombre.trim() !== "") {
          const dato2Info = '-' + turno.datosDinamicos.dato2.nombre + ': ' + turno.datosDinamicos.dato2.valor;
          textLines.push(dato2Info);
        }
        if (turno.datosDinamicos.dato3.nombre.trim() !== "") {
          const dato3Info = '-' + turno.datosDinamicos.dato3.nombre + ': ' + turno.datosDinamicos.dato3.valor;
          textLines.push(dato3Info);
        }

        const lineaAltura = 10;

        if (!primeraPagina && horizontal + lineaAltura * textLines.length > alturaPagina - margen) {
          doc.addPage();
          horizontal = margen;
        }

        if (primeraPagina) {
          
          horizontal += lineaAltura * 2;
          primeraPagina = false; 
        }

        textLines.forEach(line => {
          doc.text(line, margen, horizontal);
          horizontal += lineaAltura;
        });

        const ancho = 190;
        const posHorizontal = horizontal + 2;
        doc.setLineWidth(0.3); // Grosor de la línea
        doc.line(margen, posHorizontal, margen + ancho, posHorizontal);
        horizontal += lineaAltura;
      }
    });

    doc.save(this.usuario.nombre + '_' + this.usuario.apellido + '_' + 'HistoriaClinica_' + this.especialidadSeleccionada + '.pdf');
  }




}
