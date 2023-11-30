import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPacienteRoutingModule } from './perfil-paciente-routing.module';
import { FormsModule } from '@angular/forms';
import { PerfilPacienteComponent } from './perfil-paciente.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    PerfilPacienteComponent,
  ],
  imports: [
    CommonModule,
    PerfilPacienteRoutingModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class PerfilPacienteModule { }
