import { ConsultaUsuariosService } from './../../services/consulta-usuarios.service';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { SharedFormService } from './../../services/shared-form.service';
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
    private consultaUsuarios: ConsultaUsuariosService
  ) {}

  ngOnInit(): void {
    this.inicioSesionFormulario = this.sharedFormService.formularioCompartido();
    this.usuarios = this.consultaUsuarios.consultarUsuarios();
  }

  validarDatos() {
    if(this.consultaUsuarios.buscarUsuarioEnLista(this.usuarios, this.inicioSesionFormulario.value.usuario)) {
      this.consultaUsuarios.cambiarEstadoUsuario(this.inicioSesionFormulario.value.usuario, true);
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
