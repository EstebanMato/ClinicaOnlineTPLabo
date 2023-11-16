import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilEspecialistaComponent } from './perfil-especialista.component';
import { PerfilEspecialistaRoutingModule } from './perfil-especialista-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PerfilEspecialistaComponent
  ],
  imports: [
    CommonModule,
    PerfilEspecialistaRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class PerfilEspecialistaModule { }
