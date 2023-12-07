import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { Chart } from 'chart.js/auto';
import { ExcelService } from 'src/app/services/excel.service';
import { TurnoService } from 'src/app/services/turno.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-turnos-medico-finalizados',
  templateUrl: './turnos-medico-finalizados.component.html',
  styleUrls: ['./turnos-medico-finalizados.component.css']
})
export class TurnosMedicoFinalizadosComponent {

  chart: any = [];
  turnosPorEspecialistaFinalizados: any = {};
  especialistas: any = [];
  turnos: any = [];
  isLoading = false;
  fechaInicio: Date = new Date();
  fechaInicioAux: any;
  fechaFin: Date = new Date();
  fechaFinAux: any;


  constructor(private turnosService: TurnoService, private excelService: ExcelService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.isLoading=true;
    const hoy = new Date();

    this.fechaInicio = new Date(hoy.getFullYear(), 0, 1);


    this.fechaFin = new Date(hoy.getFullYear(), 11, 31)

    this.turnosService.getEspecialistas().subscribe((res) => { this.especialistas = res; });
    this.turnosService.getTurnosFinalizados().subscribe((res) => { this.turnos = res; this.agruparPorMedico();})
    this.isLoading=false;

  }

  buscar() {
    this.agruparPorMedico();
  }

  agruparPorMedico() {

    if (this.fechaInicioAux && this.fechaFinAux) {
      this.fechaInicio = this.convertirAFecha2(this.fechaInicioAux)
      this.fechaFin = this.convertirAFecha2(this.fechaFinAux)
    }

    const fechaInicioDate = this.fechaInicio;
    const fechaFinDate = this.fechaFin;

    const turnosFiltrados = this.turnos.filter((turno: any) => {
      const fechaTurno = this.convertirAFecha(turno.fecha);
      return fechaTurno >= fechaInicioDate && fechaTurno <= fechaFinDate;
    });

    const turnosPorEspecialista = turnosFiltrados.reduce((acumulador: any, turno: any) => {

      const indiceFecha = acumulador['findIndex']((item: { uid: string; }) => item.uid === turno.uidEspecialista);

      if (indiceFecha !== -1) {
        acumulador[indiceFecha].cantidad++;
      } else {
        acumulador['push']({ uid: turno.uidEspecialista, cantidad: 1 });
      }

      return acumulador;
    }, []);

    console.log(turnosPorEspecialista)

    for (let i = 0; i < turnosPorEspecialista.length; i++) {
      const turno = turnosPorEspecialista[i];

      for (let j = 0; j < this.especialistas.length; j++) {
        const especialista = this.especialistas[j];

        if (turno.uid == especialista.uid) {
          turno.uid = "" + especialista.nombre + ", " + especialista.apellido
        }
      }
    }

    console.log(turnosPorEspecialista);
    this.turnosPorEspecialistaFinalizados = turnosPorEspecialista;
    this.chartTurnosFinalizados();

  }

  convertirAFecha(fechaString: string) {
    const partes = fechaString.split('/');
    const fecha = new Date(+partes[2], +partes[1] - 1, +partes[0]);
    return fecha;
  }

  convertirAFecha2(fechaString: string) {
    const partes = fechaString.split('-');
    const fecha = new Date(+partes[0], +partes[1] - 1, +partes[2]);
    return fecha;
  }


  chartTurnosFinalizados() {
    const existingChart = Chart.getChart('turnosMedicoFinalizados');

    if (existingChart) {
      existingChart.destroy();
    }

    const ejeX = this.turnosPorEspecialistaFinalizados.map((item: any) => item.uid);
    const ejeY = this.turnosPorEspecialistaFinalizados.map((item: any) => item.cantidad);

    this.chart = new Chart('turnosMedicoFinalizados', {
      type: 'bar',
      data: {
        labels: ejeX,
        datasets: [{
          label: 'Turnos Finalizados',
          data: ejeY,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  descargarExcel(){
    this.excelService.exportarExcel(this.turnosPorEspecialistaFinalizados,'turnos-finalizados')
  }

  async imprimirPantalla() {
    const chartElement = document.getElementById('contenedorChart');

    if (chartElement) {
      const canvas = await html2canvas(chartElement);


      const imgData = canvas.toDataURL('image/png');

      this.pdfService.descargarPdf(imgData , 'Turnos por médicos finalizados')
      
    } else {
      console.error('El elemento con ID "turnosMedicoFinalizados" no fue encontrado.');
    }
  }
}
