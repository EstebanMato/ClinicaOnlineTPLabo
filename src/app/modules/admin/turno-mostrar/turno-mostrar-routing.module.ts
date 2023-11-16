import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnoMostrarComponent } from './turno-mostrar.component';


const routes: Routes=[{
  path:'', component:TurnoMostrarComponent, children:[]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnoMostrarRoutingModule { }
