import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilAdminComponent } from './perfil-admin.component';

const routes: Routes = [
  {path:'',component:PerfilAdminComponent,children: []},

];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PerfilAdminRoutingModule { }
