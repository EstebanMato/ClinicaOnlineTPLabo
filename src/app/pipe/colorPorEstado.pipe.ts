import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPorEstado'
})
export class ColorPorEstadoPipe implements PipeTransform {
  transform(estado: string): string {
    switch (estado) {
      case 'confirmado':
        return 'badge rounded-pill text-bg-success';
      case 'finalizado':
        return 'badge rounded-pill text-bg-warning';
      case 'cancelado':
      case 'rechazado':
        return 'badge rounded-pill text-bg-danger';
      case 'pendiente':
        return 'badge rounded-pill text-bg-secondary';
      default:
        return 'badge rounded-pill text-bg-muted'; // Clase de Bootstrap para texto gris por defecto
    }
  }
}
