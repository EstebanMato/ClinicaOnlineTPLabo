import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPacienteComponent } from './perfil-paciente.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:PerfilPacienteComponent,children: []},

];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PerfilPacienteRoutingModule { }
