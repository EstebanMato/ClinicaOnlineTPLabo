import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnoPacienteComponent } from './turno-paciente.component';

const routes: Routes=[{
  path:'', component:TurnoPacienteComponent, children:[]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnoPacienteRoutingModule { }
