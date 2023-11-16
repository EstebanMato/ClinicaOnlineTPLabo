import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeEspecialistasComponent } from './home-especialistas.component';

const routes: Routes = [
  {path:'',component:HomeEspecialistasComponent,children: []},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forChild(routes)
  ]
})
export class HomeEspecialistasRoutingModule { }
