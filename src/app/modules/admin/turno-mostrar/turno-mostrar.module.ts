import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoMostrarComponent } from './turno-mostrar.component';
import { TurnoMostrarRoutingModule } from './turno-mostrar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TurnoMostrarComponent
  ],
  imports: [
    CommonModule,
    TurnoMostrarRoutingModule,
    ReactiveFormsModule
  ]
})
export class TurnoMostrarModule { }
