import { FormularioCompartidoModule } from './../modules/formulario-compartido/formulario-compartido.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbAlertModule
  ],
  exports: [RouterModule]
})
export class LoginModule { }
