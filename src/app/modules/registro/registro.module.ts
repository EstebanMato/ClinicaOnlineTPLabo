import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
