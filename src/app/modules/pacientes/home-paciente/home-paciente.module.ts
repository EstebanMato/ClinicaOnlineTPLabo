import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePacienteRoutingModule } from './home-paciente-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePacienteComponent } from './home-paciente.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    HomePacienteComponent,
  ],
  imports: [
    CommonModule,
    HomePacienteRoutingModule,
    FormsModule,ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class HomePacienteModule { }
