import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoPacienteComponent } from './turno-paciente.component';
import { TurnoPacienteRoutingModule } from './turno-paciente-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TurnoPacienteComponent
  ],
  imports: [
    CommonModule,
    TurnoPacienteRoutingModule,
    FormsModule
  ]
})
export class TurnoPacienteModule { }
