import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoAdminComponent } from './turno-admin.component';
import { TurnoAdminRoutingModule } from './turno-admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    TurnoAdminComponent
  ],
  imports: [
    CommonModule,
    TurnoAdminRoutingModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class TurnoAdminModule { }
