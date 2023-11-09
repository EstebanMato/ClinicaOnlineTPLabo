import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePacienteComponent } from './home-paciente.component';

const routes: Routes = [
  {path:'',component:HomePacienteComponent,children: []},
  {
    path: 'turno',
    loadChildren: () => import('../turno-paciente/turno-paciente.module')
      .then(mod => mod.TurnoPacienteModule)
  },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class HomePacienteRoutingModule { }
