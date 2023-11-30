import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoPacienteComponent } from './turno-paciente.component';
import { TurnoPacienteRoutingModule } from './turno-paciente-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    TurnoPacienteComponent
  ],
  imports: [
    CommonModule,
    TurnoPacienteRoutingModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class TurnoPacienteModule { }
