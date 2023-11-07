import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { RegisterEmpleadoComponent } from './register-empleado.component';

const routes: Routes=[{
  path:'', component:RegisterEmpleadoComponent, children:[]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterEmpleadoRoutingModule { }
