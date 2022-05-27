import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { GrillaTarjetasComponent } from './grilla-tarjetas/grilla-tarjetas.component';
import { FiltroComponent } from './filtro/filtro.component';



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
