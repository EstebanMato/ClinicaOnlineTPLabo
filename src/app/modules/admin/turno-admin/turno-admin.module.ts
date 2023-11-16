import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoAdminComponent } from './turno-admin.component';
import { TurnoAdminRoutingModule } from './turno-admin-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TurnoAdminComponent
  ],
  imports: [
    CommonModule,
    TurnoAdminRoutingModule,
    FormsModule
  ]
})
export class TurnoAdminModule { }
