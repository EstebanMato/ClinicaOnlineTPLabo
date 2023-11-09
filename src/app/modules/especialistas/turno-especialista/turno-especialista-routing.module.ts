import { NgModule } from '@angular/core';
import { TurnoEspecialistaComponent } from './turno-especialista.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[{
  path:'', component:TurnoEspecialistaComponent, children:[]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnoEspecialistaRoutingModule { }
