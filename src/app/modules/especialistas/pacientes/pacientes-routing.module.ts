import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes.component';

const routes: Routes = [
  {path:'',component:PacientesComponent,children: []},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forChild(routes)
  ]
})
export class PacientesRoutingModule { }
