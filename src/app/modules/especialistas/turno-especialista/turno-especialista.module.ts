import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoEspecialistaComponent } from './turno-especialista.component';
import { TurnoEspecialistaRoutingModule } from './turno-especialista-routing.module';



@NgModule({
  declarations: [
    TurnoEspecialistaComponent
  ],
  imports: [
    CommonModule,
    TurnoEspecialistaRoutingModule
  ]
})
export class TurnoEspecialistaModule { }
