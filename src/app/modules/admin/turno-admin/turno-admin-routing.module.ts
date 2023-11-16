import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnoAdminComponent } from './turno-admin.component';

const routes: Routes=[{
  path:'', component:TurnoAdminComponent, children:[]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnoAdminRoutingModule { }
