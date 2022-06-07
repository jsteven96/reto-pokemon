import { ConsultaUsuariosService } from './../../../services/consulta-usuarios.service';
import { SharedFormService } from './../../../services/shared-form.service';
import { User } from './../../../models/user.model';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {
  NgbCalendar,
  NgbDate,
  NgbDatepickerNavigateEvent,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent implements OnInit {
  primerDia: NgbDate | undefined;
  ultimoDia: NgbDate | undefined;
  model: NgbDateStruct | undefined;
  dateRep: NgbDate | undefined;
  date: NgbDate | undefined;

  inicioSesionFormulario: FormGroup | any;
  mostrarAlerta = false;
  usuarios: User[] = [];

  constructor(
    private sharedFormService: SharedFormService,
    private router: Router,
    private consultaUsuariosService: ConsultaUsuariosService,
    private calendar: NgbCalendar
  ) {}

  ngOnInit(): void {
    this.inicioSesionFormulario = this.sharedFormService.formularioCompartido();
    this.usuarios = this.consultaUsuariosService.consultarUsuarios();
  }

  validarDatos() {
    if (
      this.consultaUsuariosService.buscarUsuarioEnLista(
        this.usuarios,
        this.inicioSesionFormulario.value.usuario,
        this.inicioSesionFormulario.value.contrasenia
      )
    ) {
      this.consultaUsuariosService.cambiarEstadoUsuario(
        this.inicioSesionFormulario.value.usuario,
        true
      );
      this.router.navigate(['home']);
    } else {
      this.inicioSesionFormulario.reset();
      this.mostrarAlerta = true;
    }
  }

  navegarARegistro() {
    this.router.navigate(['registro']);
  }

  alSeleccionarDia(event: NgbDate) {
    // Para una semana de lunes a domingo sumar 6 dias al weekday
    // para una semana de Domingo a Sábado sumar 7 dias al weekday
    this.date = event;
    this.primerDia = 
      this.calendar.getPrev(
        this.date,
        'd',
        ((this.calendar.getWeekday(this.date) + 6) % 7)
      );

     /* 

    this.ultimoDia = this.calendar.getNext(
      this.calendar.getPrev(
        this.date,
        'd',
        ((this.calendar.getWeekday(this.date) + 7) % 7)
      ),
      'd',
      6
    );*/
    this.ultimoDia = this.calendar.getNext(this.primerDia, 'd', 6);
  }
}
