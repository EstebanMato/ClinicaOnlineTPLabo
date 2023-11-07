import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [{path :"", redirectTo: '/login', pathMatch: 'full',},
{
  path: 'login',
  loadChildren: () => import('./modules/login/login.module')
  .then(mod => mod.LoginModule)
},
{
  path: 'home/admin',
  loadChildren: () => import('./modules/admin/home/home.module')
    .then(mod => mod.HomeModule)
},
{
  path: 'home/especialistas',
  loadChildren: () => import('./modules/especialistas/home-especialistas/home-especialistas.module')
    .then(mod => mod.HomeEspecialistasModule)
},
{
  path: 'home/pacientes',
  loadChildren: () => import('./modules/pacientes/home-paciente/home-paciente.module')
    .then(mod => mod.HomePacienteModule)
},
{ path: "**", component: NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
