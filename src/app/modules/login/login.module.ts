import { CompartidoModule } from './../compartido/compartido.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioCompartidoModule } from './../formulario-compartido/formulario-compartido.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionComponent
  }, 
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioCompartidoModule,
    NgbAlertModule,
    CompartidoModule,
    NgbModule
  ],
  exports: [RouterModule]
})
export class LoginModule { }
