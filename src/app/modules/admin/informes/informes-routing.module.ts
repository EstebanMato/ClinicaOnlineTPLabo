import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformesComponent } from './informes.component';

const routes: Routes = [
  {path:'',component:InformesComponent,children: []},
];

@NgModule({
  
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class InformesRoutingModule { }
