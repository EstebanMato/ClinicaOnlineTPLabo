import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ExcelService } from 'src/app/services/excel.service';
import { TurnoService } from 'src/app/services/turno.service';
import html2canvas from 'html2canvas';
import { PdfService } from 'src/app/services/pdf.service';



@Component({
  selector: 'app-turnos-medico',
  templateUrl: './turnos-medico.component.html',
  styleUrls: ['./turnos-medico.component.css']
})
export class TurnosMedicoComponent {

  chart: any = [];
  turnosPorDia: any = [];
  especialistas: any = [];
  turnos: any = [];
  especialistaSeleccionadoUid: any = '';
  isLoading = false;
  fechaInicio: Date = new Date();
  fechaInicioAux: any;
  fechaFin: Date = new Date();
  fechaFinAux: any;

  constructor(private turnosService: TurnoService, private excelService: ExcelService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const hoy = new Date();

    this.fechaInicio = new Date(hoy.getFullYear(), 0, 1);


    this.fechaFin = new Date(hoy.getFullYear(), 11, 31)

    this.turnosService.getEspecialistas().subscribe((res) => { this.especialistas = res;});
    this.turnosService.getTurnos().subscribe((res) => { this.turnos = res;  })
    this.isLoading = false;
  }

  buscar() {
    this.filtraPorMedico();
  }

  filtraPorMedico() {

    if (this.fechaInicioAux && this.fechaFinAux) {
      this.fechaInicio = this.convertirAFecha2(this.fechaInicioAux)
      this.fechaFin = this.convertirAFecha2(this.fechaFinAux)
    }

    if (this.especialistaSeleccionadoUid != '') {
      const fechaInicioDate = this.fechaInicio;
      const fechaFinDate = this.fechaFin;

      const turnosFiltrados = this.turnos.filter((turno: any) => {
        const fechaTurno = this.convertirAFecha(turno.fecha);
        return turno.uidEspecialista === this.especialistaSeleccionadoUid && fechaTurno >= fechaInicioDate && fechaTurno <= fechaFinDate;
      });

      const turnosPorFechaEstado = turnosFiltrados.reduce((acumulador: any, turno: any) => {
        const fecha = turno.fecha;
        const estado = turno.estado;

        if (!acumulador[fecha]) {
          acumulador[fecha] = { finalizado: 0, pendiente: 0, cancelado: 0, confirmado: 0 };
        }

        acumulador[fecha][estado]++;
        return acumulador;
      }, {});

      const arrayTurnosPorFechaEstado = Object.keys(turnosPorFechaEstado).map((fecha: string) => {
        return {
          fecha,
          finalizado: turnosPorFechaEstado[fecha].finalizado,
          pendiente: turnosPorFechaEstado[fecha].pendiente,
          cancelado: turnosPorFechaEstado[fecha].cancelado,
          confirmado: turnosPorFechaEstado[fecha].confirmado,
        };
      });

      const sortedTurnosPorFecha = arrayTurnosPorFechaEstado.sort((a, b) => {
        const dateA = this.convertirAFecha(a.fecha);
        const dateB = this.convertirAFecha(b.fecha);

        return dateA.getTime() - dateB.getTime();
      });

      this.turnosPorDia = sortedTurnosPorFecha;
      this.chartTurnosMedico();
    }
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


  chartTurnosMedico() {
    const existingChart = Chart.getChart('turnosMedico');

    if (existingChart) {
      existingChart.destroy();
    }
    
    const turnosPorFechaEstado = this.turnosPorDia.reduce((acumulador: any, turno: any) => {
      const fecha = turno.fecha;

      if (!acumulador[fecha]) {
        acumulador[fecha] = { finalizado: 0, pendiente: 0, cancelado: 0, confirmado: 0 };
      }

      acumulador[fecha].finalizado += turno.finalizado;
      acumulador[fecha].pendiente += turno.pendiente;
      acumulador[fecha].cancelado += turno.cancelado;
      acumulador[fecha].confirmado += turno.confirmado;

      return acumulador;
    }, {});


    const fechas = Object.keys(turnosPorFechaEstado);
    const estados = ['finalizado', 'confirmado', 'pendiente', 'cancelado' ];

    const datasets = estados.map((estado, index) => {
      const data = fechas.map((fecha) => turnosPorFechaEstado[fecha][estado] || 0);

      return {
        label: estado.charAt(0).toUpperCase() + estado.slice(1), 
        data: data,
        backgroundColor: this.colorBarra(index), 
        borderColor: this.colorBordeBarra(index), 
        borderWidth: 1,
      };
    });

    this.chart = new Chart('turnosMedico', {
      type: 'bar',
      data: {
        labels: fechas,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  
  colorBarra(index: number): string {
    const colors = ['rgba(255, 205, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(144, 144, 144, 0.6)', 'rgba(255, 99, 132, 0.6)'];
    return colors[index % colors.length];
  }

  colorBordeBarra(index: number): string {
    const borderColors = ['rgba(255, 205, 86, 1)','rgba(75, 192, 192, 1)', 'rgba(144, 144, 144, 1)', 'rgba(255, 99, 132, 1)'];
    return borderColors[index % borderColors.length];
  }

  descargarExcel(){
    this.excelService.exportarExcel(this.turnosPorDia,'turnos-medico-'+this.especialistaSeleccionadoUid)
  }

  async imprimirPantalla() {
    const chartElement = document.getElementById('contenedorChart');

    if (chartElement) {
      const canvas = await html2canvas(chartElement);


      const imgData = canvas.toDataURL('image/png');

      this.pdfService.descargarPdf(imgData, 'Turnos por especialista')
      
    } else {
      console.error('El elemento con ID "turnosMedicoFinalizados" no fue encontrado.');
    }
  }
}
