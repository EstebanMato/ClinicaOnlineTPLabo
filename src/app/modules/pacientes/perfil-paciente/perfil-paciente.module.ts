import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPacienteRoutingModule } from './perfil-paciente-routing.module';
import { FormsModule } from '@angular/forms';
import { PerfilPacienteComponent } from './perfil-paciente.component';



@NgModule({
  declarations: [
    PerfilPacienteComponent
  ],
  imports: [
    CommonModule,
    PerfilPacienteRoutingModule,
    FormsModule
  ]
})
export class PerfilPacienteModule { }
