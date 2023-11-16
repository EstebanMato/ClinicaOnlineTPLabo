import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [{
  path:'', component:LoginComponent },
{
  path: 'pacientes/register',
  loadChildren: () => import('../pacientes/register/register.module')
    .then(mod => mod.RegisterModule)
},
{
  path: 'especialistas/register-empleado',
  loadChildren: () => import('../especialistas/register-empleado/register-empleado.module')
    .then(mod => mod.RegisterEmpleadoModule)
},
{
  path: 'registro',
  loadChildren: () => import('../registro/registro.module')
    .then(mod => mod.RegistroModule)
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }