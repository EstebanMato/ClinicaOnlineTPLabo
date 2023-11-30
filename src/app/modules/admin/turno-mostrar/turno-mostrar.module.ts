import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoMostrarComponent } from './turno-mostrar.component';
import { TurnoMostrarRoutingModule } from './turno-mostrar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    TurnoMostrarComponent,
    
  ],
  imports: [
    CommonModule,
    TurnoMostrarRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class TurnoMostrarModule { }
