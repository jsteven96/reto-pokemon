import { ConsultaUsuariosService } from './../../../services/consulta-usuarios.service';
import { SharedFormService } from './../../../services/shared-form.service';
import { User } from './../../../models/user.model';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent implements OnInit {
  inicioSesionFormulario: FormGroup | any;
  mostrarAlerta = false;
  usuarios: User[] = [];

  constructor(
    private sharedFormService: SharedFormService,
    private router: Router,
    private consultaUsuariosService: ConsultaUsuariosService
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
}
