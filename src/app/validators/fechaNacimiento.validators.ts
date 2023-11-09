import { AbstractControl, ValidationErrors } from '@angular/forms';

export function fechaNacimientoValidator(control: AbstractControl): ValidationErrors | null {

  const fechaActual = new Date();

  const fechaMinima = new Date(1900, 0, 1);

  const fechaNacimiento = new Date(control.value);

  if (isNaN(fechaNacimiento.getTime()) || fechaNacimiento < fechaMinima || fechaNacimiento > fechaActual) {
    return { fechaNacimientoInvalida: true };
  }

  return null;
}