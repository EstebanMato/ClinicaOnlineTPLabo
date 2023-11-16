import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePacienteRoutingModule } from './home-paciente-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePacienteComponent } from './home-paciente.component';



@NgModule({
  declarations: [
    HomePacienteComponent
  ],
  imports: [
    CommonModule,
    HomePacienteRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class HomePacienteModule { }
