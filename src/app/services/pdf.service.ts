import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  async descargarPdf(imgData: any, info: string) {

    const pdf = new jsPDF('p', 'mm', 'a4');
      const margen = 10;
      let horizontal = margen;

      const logoClinica = 'assets/img/logo.png';
      const imgWidth = 30;
      const imgHeight = 30;
      const imgMargin = 10;
      const fechaHoy = new Date();

      const dia = fechaHoy.getDate().toString().padStart(2, '0');
      const mes = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
      const anio = fechaHoy.getFullYear();
      const fechaFormateada = `${dia}/${mes}/${anio}`;
        
      pdf.addImage(logoClinica, 'PNG', pdf.internal.pageSize.getWidth() - imgWidth - imgMargin, imgMargin, imgWidth, imgHeight);
    
      pdf.text('Fecha de emisión: ' + fechaFormateada, margen, horizontal);
      pdf.text(info, margen, 70);


      pdf.addImage(imgData, 'PNG', 10, 80, 190, 80); 
      pdf.save('chart.pdf');

  }
}
