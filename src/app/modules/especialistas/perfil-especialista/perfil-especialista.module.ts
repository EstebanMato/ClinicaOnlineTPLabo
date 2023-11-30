import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilEspecialistaComponent } from './perfil-especialista.component';
import { PerfilEspecialistaRoutingModule } from './perfil-especialista-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    PerfilEspecialistaComponent,
    
  ],
  imports: [
    CommonModule,
    PerfilEspecialistaRoutingModule,
    FormsModule,
    NgbModule,
    SharedModuleModule
  ]
})
export class PerfilEspecialistaModule { }
