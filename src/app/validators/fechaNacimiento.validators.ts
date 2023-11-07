import { AbstractControl, ValidationErrors } from '@angular/forms';

export function fechaNacimientoValidator(control: AbstractControl): ValidationErrors | null {
  // Obtén la fecha actual
  const fechaActual = new Date();

  // Establece la fecha mínima (01/01/1900)
  const fechaMinima = new Date(1900, 0, 1);

  // Convierte el valor del control en una fecha
  const fechaNacimiento = new Date(control.value);

  // Verifica si la fecha de nacimiento está dentro del rango
  if (isNaN(fechaNacimiento.getTime()) || fechaNacimiento < fechaMinima || fechaNacimiento > fechaActual) {
    return { fechaNacimientoInvalida: true };
  }

  // La fecha de nacimiento es válida
  return null;
}