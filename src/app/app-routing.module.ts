import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RolGuard } from './guards/rol-admin.guard';
import { rolEspecialistaGuard } from './guards/rol-especialista.guard';
import { rolPacienteGuard } from './guards/rol-paciente.guard';


const routes: Routes = [{path :"", redirectTo: '/login', pathMatch: 'full',},
{
  path: 'login',
  loadChildren: () => import('./modules/login/login.module')
  .then(mod => mod.LoginModule)
},
{
  path: 'home/admin',
  loadChildren: () => import('./modules/admin/home/home.module')
    .then(mod => mod.HomeModule), canActivate: [RolGuard]
},
{
  path: 'perfil/admin',
  loadChildren: () => import('./modules/admin/perfil-admin/perfil-admin.module')
    .then(mod => mod.PerfilAdminModule), canActivate: [RolGuard]
},
{
  path: 'informes',
  loadChildren: () => import('./modules/admin/informes/informes.module')
    .then(mod => mod.InformesModule), canActivate: [RolGuard]
},
{
  path: 'home/especialista',
  loadChildren: () => import('./modules/especialistas/home-especialistas/home-especialistas.module')
    .then(mod => mod.HomeEspecialistasModule) ,canActivate: [rolEspecialistaGuard]
},
{
  path: 'historiaclinica/especialista',
  loadChildren: () => import('./modules/especialistas/pacientes/pacientes.module')
    .then(mod => mod.PacientesModule),canActivate: [rolEspecialistaGuard]
},
{
  path: 'perfil/especialista',
  loadChildren: () => import('./modules/especialistas/perfil-especialista/perfil-especialista.module')
    .then(mod => mod.PerfilEspecialistaModule) ,canActivate: [rolEspecialistaGuard]
},
{
  path: 'home/paciente',
  loadChildren: () => import('./modules/pacientes/home-paciente/home-paciente.module')
    .then(mod => mod.HomePacienteModule), canActivate: [rolPacienteGuard]
},
{
  path: 'perfil/paciente',
  loadChildren: () => import('./modules/pacientes/perfil-paciente/perfil-paciente.module')
    .then(mod => mod.PerfilPacienteModule), canActivate: [rolPacienteGuard]
},
{ path: "**", component: NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
