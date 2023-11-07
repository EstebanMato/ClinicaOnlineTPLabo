import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePacienteRoutingModule } from './home-paciente-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePacienteComponent } from './home-paciente.component';



@NgModule({
  declarations: [
    HomePacienteComponent
  ],
  imports: [
    CommonModule,
    HomePacienteRoutingModule,
    FormsModule
  ]
})
export class HomePacienteModule { }
