import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'',component:HomeComponent,children: []},

  {
    path: 'register',
    loadChildren: () => import('../register-admin/register-admin.module')
      .then(mod => mod.RegisterAdminModule)
  },
  
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule , RouterModule.forChild(routes)
  ]
  
})
export class HomeRoutingModule { }
