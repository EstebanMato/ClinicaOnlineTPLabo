import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAdminComponent } from './perfil-admin.component';
import { PerfilAdminRoutingModule } from './perfil-admin-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    PerfilAdminComponent
  ],
  imports: [
    CommonModule,
    PerfilAdminRoutingModule,
    SharedModuleModule
  ]
})
export class PerfilAdminModule { }
