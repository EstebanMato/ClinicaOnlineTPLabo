import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    PacientesComponent,
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,SharedModuleModule
  ]
})
export class PacientesModule { }
