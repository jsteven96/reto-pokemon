import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCompartidoComponent } from './formulario-compartido/formulario-compartido.component';

@NgModule({
  declarations: [
    FormularioCompartidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioCompartidoComponent
  ]
})
export class FormularioCompartidoModule { }
