import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ExcelService } from 'src/app/services/excel.service';
import { TurnoService } from 'src/app/services/turno.service';
import html2canvas from 'html2canvas';
import { PdfService } from 'src/app/services/pdf.service';


@Component({
  selector: 'app-turnos-dia',
  templateUrl: './turnos-dia.component.html',
  styleUrls: ['./turnos-dia.component.css']
})
export class TurnosDiaComponent {

  isLoading = false;
  chart: any = [];
  turnosPorDia: any = {};

  constructor(private turnosService: TurnoService, private excelService: ExcelService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.turnosService.getTurnos().subscribe((res) => {
      this.turnosPorDia = res;


      const turnosPorFechaEstado = this.turnosPorDia.reduce((acumulador: any, turno: any) => {
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
      console.log(this.turnosPorDia)
      this.chartTurnosDia();
      this.isLoading=false;
    });
  }

  convertirAFecha(fechaString: string) {
    const partes = fechaString.split('/');
    const fecha = new Date(+partes[2], +partes[1] - 1, +partes[0]);
    return fecha;
  }

  chartTurnosDia() {
    const existingChart = Chart.getChart('turnosDia');

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

    this.chart = new Chart('turnosDia', {
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

  descargarExcel() {
    this.excelService.exportarExcel(this.turnosPorDia, 'cantidad-turnos-dia')
  }

  async imprimirPantalla() {
    const chartElement = document.getElementById('contenedorChart');

    if (chartElement) {
      const canvas = await html2canvas(chartElement);


      const imgData = canvas.toDataURL('image/png');

      this.pdfService.descargarPdf(imgData, 'Turnos por día')
      
    } else {
      console.error('El elemento con ID "turnosMedicoFinalizados" no fue encontrado.');
    }
  }
}
