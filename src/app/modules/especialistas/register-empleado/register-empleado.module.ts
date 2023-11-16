import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmpleadoComponent } from './register-empleado.component';
import { RegisterEmpleadoRoutingModule } from './register-empleado-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';



@NgModule({
  declarations: [
    RegisterEmpleadoComponent
  ],
  imports: [
    CommonModule,
    RegisterEmpleadoRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ]
})
export class RegisterEmpleadoModule { }
