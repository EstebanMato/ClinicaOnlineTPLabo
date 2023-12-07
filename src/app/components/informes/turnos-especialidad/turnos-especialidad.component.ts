import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TurnoService } from 'src/app/services/turno.service';
import html2canvas from 'html2canvas';
import { ExcelService } from 'src/app/services/excel.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-turnos-especialidad',
  templateUrl: './turnos-especialidad.component.html',
  styleUrls: ['./turnos-especialidad.component.css']
})
export class TurnosEspecialidadComponent implements OnInit {
  chart: any = [];
  turnosPorEspecialidad: any = {};
  isLoading = false;
  opcionSeleccionada= '';

  constructor(private turnosService: TurnoService, private excelService: ExcelService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.turnosService.getTurnosActivos().subscribe((res) => {
      console.log(res)
      this.turnosPorEspecialidad = res.reduce((acumulador, turno) => {
        const nombreEspecialidad = turno['especialidad'].nombre;
        if (acumulador[nombreEspecialidad]) {
          acumulador[nombreEspecialidad]++;
        } else {
          acumulador[nombreEspecialidad] = 1;
        }
        return acumulador;
      }, {});
      console.log(this.turnosPorEspecialidad)
      this.chartTurnosEspecialidad();
      this.isLoading = false;
    });
  }

  descargarExcel(){
    const turnosPorEspecialidad = Object.entries(this.turnosPorEspecialidad).map(([key, value]) => [key, value]);
    console.log(turnosPorEspecialidad)
    this.excelService.exportarExcel(turnosPorEspecialidad,'cantidad-turnos-especialidad')
  }

  chartTurnosEspecialidad() {
    const existingChart = Chart.getChart('turnosEspecialidad');

    if (existingChart) {
      existingChart.destroy();
    }
    const ejeX = Object.keys(this.turnosPorEspecialidad);
    const ejeY = Object.values(this.turnosPorEspecialidad);

    this.chart = new Chart('turnosEspecialidad', {
      type: 'bar',
      data: {
        labels: ejeX,
        datasets: [{
          label: 'Turnos',
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

  async imprimirPantalla() {
    const chartElement = document.getElementById('contenedorChart');

    if (chartElement) {
      const canvas = await html2canvas(chartElement);


      const imgData = canvas.toDataURL('image/png');

      this.pdfService.descargarPdf(imgData, "Turnos por especialidad")
      
    } else {
      console.error('El elemento con ID "turnosMedicoFinalizados" no fue encontrado.');
    }
  }
}
