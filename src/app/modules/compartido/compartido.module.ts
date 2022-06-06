import { FormsModule } from '@angular/forms';
import { ModalComponent } from './moleculas/modal/modal.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './atomos/tarjeta/tarjeta.component';
import { GrillaTarjetasComponent } from './organismos/grilla-tarjetas/grilla-tarjetas.component';
import { FiltroComponent } from './moleculas/filtro/filtro.component';



@NgModule({
  declarations: [
    ModalComponent,
    TarjetaComponent,
    GrillaTarjetasComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalComponent,
    GrillaTarjetasComponent,
    FiltroComponent
  ]
})
export class CompartidoModule { }
