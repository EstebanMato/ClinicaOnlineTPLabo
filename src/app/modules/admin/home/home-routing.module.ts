import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RolGuard } from 'src/app/guards/rol-admin.guard';

const routes: Routes = [
  {path:'',
    canActivate:[RolGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },

    {
      path: 'register',
      loadChildren: () => import('../register-admin/register-admin.module')
        .then(mod => mod.RegisterAdminModule)
    },
    {
      path: 'turnos',
      loadChildren: () => import('../turno-admin/turno-admin.module')
        .then(mod => mod.TurnoAdminModule)
    },
    {
      path: 'turnos-mostrar',
      loadChildren: () => import('../turno-mostrar/turno-mostrar.module')
        .then(mod => mod.TurnoMostrarModule)
    },
  ]},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
  
})
export class HomeRoutingModule { }
