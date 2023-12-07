import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformesComponent } from './informes.component';
import { InformesRoutingModule } from './informes-routing.module';
import { LogsUsuariosComponent } from 'src/app/components/informes/logs-usuarios/logs-usuarios.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TurnosEspecialidadComponent } from 'src/app/components/informes/turnos-especialidad/turnos-especialidad.component';
import { TurnosDiaComponent } from 'src/app/components/informes/turnos-dia/turnos-dia.component';
import { TurnosMedicoComponent } from 'src/app/components/informes/turnos-medico/turnos-medico.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TurnosMedicoFinalizadosComponent } from 'src/app/components/informes/turnos-medico-finalizados/turnos-medico-finalizados.component';
import { ExcelService } from 'src/app/services/excel.service';



@NgModule({
  declarations: [
    InformesComponent,
    LogsUsuariosComponent,
    TurnosEspecialidadComponent,
    TurnosDiaComponent,
    TurnosMedicoComponent,
    TurnosMedicoFinalizadosComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    NgApexchartsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [ExcelService],
})
export class InformesModule { }
