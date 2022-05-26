import { ModalComponent } from './modal/modal.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { GrillaTarjetasComponent } from './grilla-tarjetas/grilla-tarjetas.component';



@NgModule({
  declarations: [
    ModalComponent,
    TarjetaComponent,
    GrillaTarjetasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    GrillaTarjetasComponent
  ]
})
export class CompartidoModule { }
