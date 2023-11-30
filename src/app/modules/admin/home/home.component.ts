import { Component, OnInit } from '@angular/core';
import { DataqueryService } from 'src/app/services/dataquery.service';
import jsPDF from 'jspdf';
import { TurnoService } from 'src/app/services/turno.service';
import { combineLatest, map } from 'rxjs';
import { ExcelService } from 'src/app/services/excel.service';
import { fadeInUpAnimation } from 'src/app/components/animaciones/animaciones.animation';


const ELEMENT_DATA:  any[] = [
  { nombre: 'Juan', apellido: 'García', edad: 25, pais: 'Argentina' },
  { nombre: 'María', apellido: 'López', edad: 30, pais: 'España' },
  { nombre: 'Carlos', apellido: 'Martínez', edad: 28, pais: 'México' },
  { nombre: 'Ana', apellido: 'Fernández', edad: 22, pais: 'Colombia' },
  { nombre: 'Pedro', apellido: 'Díaz', edad: 35, pais: 'Chile' },
  { nombre: 'Laura', apellido: 'Ramírez', edad: 27, pais: 'Perú' },
  { nombre: 'Sofía', apellido: 'Gómez', edad: 29, pais: 'Uruguay' },
  { nombre: 'Diego', apellido: 'Hernández', edad: 31, pais: 'Brasil' },
  { nombre: 'Valentina', apellido: 'Pérez', edad: 26, pais: 'Ecuador' },
  { nombre: 'Lucas', apellido: 'Suárez', edad: 24, pais: 'Paraguay' }
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ExcelService],
  animations: [fadeInUpAnimation]
})
export class HomeComponent implements OnInit {

  usuarios: any[] = [];
  isLoading = false
  turnosDetallado: any;

  constructor(private dataq: DataqueryService, private turnoService: TurnoService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.dataq.traerUsuarios().subscribe((res) => {

      this.usuarios = res;
      this.ordenarUsuariosPorPerfil();
      this.cargarTurnos()
      this.isLoading = false;
    });
  }


  cargarTurnos() {
    this.isLoading = true;

    const turnos$ = this.turnoService.getTurnos();
    const especialistas$ = this.turnoService.getEspecialistas();

    combineLatest([turnos$, especialistas$]).pipe(
      map(([turnos, especialistas]) => {
        return turnos
          .filter((turno: any) => turno.estado === 'finalizado')
          .map((turno: any) => {
            const especialista = especialistas.find((e: any) => e.uid === turno.uidEspecialista);

            return {
              ...turno,
              nombreEspecialista: especialista ? `${especialista.apellido}, ${especialista.nombre}` : 'Especialista no encontrado',
            };
          });
      })
    ).subscribe((turnosDetallado) => {
      this.turnosDetallado = this.ordenarPorFecha(turnosDetallado);
      this.isLoading = false;
    });
  }

  cambiarEstado(usuario: any, estado: boolean) {
    this.isLoading = true;
    this.dataq.cambiarEstadoUsuario(usuario, estado).then((res) => {
      this.isLoading = false;
    })
  }

  ordenarUsuariosPorPerfil() {
    const perfilOrdenados: { [key: string]: number } = {
      'paciente': 1,
      'especialista': 2,
      'admin': 3,
    };

    this.usuarios.sort((a, b) => {
      const perfilA = perfilOrdenados[a.perfil];
      const perfilB = perfilOrdenados[b.perfil];
      return perfilA - perfilB;
    });
  }

  descargarPdf(paciente: any) {
    const doc = new jsPDF();
    const margen = 10;
    let horizontal = margen;
    const alturaPagina = doc.internal.pageSize.getHeight();

    const logoClinica = 'assets/img/logo.png';
    const imgWidth = 50;
    const imgHeight = 50;
    const imgMargin = 10;
    doc.addImage(logoClinica, 'PNG', doc.internal.pageSize.getWidth() - imgWidth - imgMargin, imgMargin, imgWidth, imgHeight);
    doc.text(paciente.nombre + ', ' + paciente.apellido + '.', margen, horizontal);

    const fechaHoy = new Date();

    const dia = fechaHoy.getDate().toString().padStart(2, '0');
    const mes = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaHoy.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    horizontal += 10;

    doc.text('Fecha de emisión: ' + fechaFormateada, margen, horizontal);


    let primeraPagina = true;

    this.turnosDetallado.forEach((turno: any, index: number) => {

      if (turno.uidPaciente == paciente.uid) {

        const textLines = [
          '-Fecha: ' + turno.fecha,
          '-Especialista: ' + turno.nombreEspecialista,
          '-Especialidad: ' + turno.especialidad.nombre,
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
        doc.setLineWidth(0.3); 
        doc.line(margen, posHorizontal, margen + ancho, posHorizontal);
        horizontal += lineaAltura;
      }
    });

    doc.save(paciente.nombre + '_' + paciente.apellido + '_' + 'HistoriaClinica.pdf');

  }

  descargarExcel(){
    this.excelService.exportarExcel(this.usuarios,'usuarios')
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


  ordenarPorFecha(turnosConFecha: any[]): any[] {
    turnosConFecha.sort((a, b) => {
      const dateA = this.convertirAFecha(a.fecha);
      const dateB = this.convertirAFecha(b.fecha);


      return dateA.getTime() - dateB.getTime();
    });

    return turnosConFecha;
  }
}
