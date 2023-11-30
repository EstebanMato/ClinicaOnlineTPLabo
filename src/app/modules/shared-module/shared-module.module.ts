import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeraMayusculaPipe } from 'src/app/pipe/primeraMayuscula.pipe';
import { ColorPorEstadoPipe } from 'src/app/pipe/colorPorEstado.pipe';
import { FormatoHoraPipe } from 'src/app/pipe/formatoHora.pipe';
import { HoverEffectDirective } from 'src/app/directive/hover-effect.directive';
import { HoverEffectblackDirective } from 'src/app/directive/hover-effectblack.directive';
import { RedondearImagenDirective } from 'src/app/directive/redondear-imagen.directive';



@NgModule({
  declarations: [
    PrimeraMayusculaPipe,
    ColorPorEstadoPipe,
    FormatoHoraPipe,
    HoverEffectDirective,
    HoverEffectblackDirective,
    RedondearImagenDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimeraMayusculaPipe,
    ColorPorEstadoPipe,
    FormatoHoraPipe,
    HoverEffectDirective,
    HoverEffectblackDirective,
    RedondearImagenDirective
    
  ]
})
export class SharedModuleModule { }
