import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEspecialistasRoutingModule } from './home-especialistas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeEspecialistasComponent } from './home-especialistas.component';



@NgModule({
  declarations: [
    HomeEspecialistasComponent
  ],
  imports: [
    CommonModule,
    HomeEspecialistasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeEspecialistasModule { }
