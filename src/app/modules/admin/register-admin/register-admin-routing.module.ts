import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAdminComponent } from './register-admin.component';


const routes: Routes=[{
  path:'', component:RegisterAdminComponent, children:[]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAdminRoutingModule { }
