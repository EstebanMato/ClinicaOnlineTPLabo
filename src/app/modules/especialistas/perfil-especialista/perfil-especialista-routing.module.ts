import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEspecialistaComponent } from './perfil-especialista.component';

const routes: Routes = [
  {path:'',component:PerfilEspecialistaComponent,children: []},

];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PerfilEspecialistaRoutingModule { }
