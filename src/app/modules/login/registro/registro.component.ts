import { Router } from '@angular/router';
import { ModalComponent } from './../../compartido/modal/modal.component';
import { ModalConfig } from './../../../models/modal-config.model';
import { ConsultaUsuariosService } from './../../../services/consulta-usuarios.service';
import { SharedFormService } from './../../../services/shared-form.service';
import { User } from './../../../models/user.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  registroFormulario: FormGroup | any;
  usuarioRegistrado = false;
  mostrarAlerta = false;
  usuarios: User[] = [];
  modalConfig: ModalConfig;
  @ViewChild('modal', {static: true}) private modalComponent: ModalComponent | any;

  constructor(
    private sharedFormService: SharedFormService,
    private consultaUsuariosService: ConsultaUsuariosService,
    private router: Router
  ) {
    this.modalConfig = {
      titulo: 'Registro exitoso',
      etiquetaBotonCerrar: 'Cerrar',
      alCerrar: () => {
        return true;
      },
      ocultarBotonDescartar: () => {
        return true
      }
    }
  }

  ngOnInit(): void {
    this.registroFormulario = this.sharedFormService.formularioCompartido();
  }

  obtenerUsuarios() {
    this.usuarios = this.consultaUsuariosService.consultarUsuarios();
  }

  async registrarUsuario() {
    this.obtenerUsuarios();
    console.log(
      this.consultaUsuariosService.buscarUsuarioEnLista(
        this.usuarios,
        this.registroFormulario.value.usuario
      )
    );
    if (
      !this.consultaUsuariosService.buscarUsuarioEnLista(
        this.usuarios,
        this.registroFormulario.value.usuario
      )
    ) {
      const usuarioFormulario: User = {
        nombre: this.registroFormulario.value.usuario,
        contrasenia: this.registroFormulario.value.contrasenia,
        autenticado: false,
      };
      this.usuarios.push(usuarioFormulario);
      sessionStorage.setItem('datosUsuario', JSON.stringify(this.usuarios));
      await this.abrirModal().then((_) => {
        this.router.navigate(['/']);
      });
    } else {
      this.mostrarAlerta = true;
      this.registroFormulario.reset();
    }
  }

  navegarALogin() {
    this.router.navigate(['/']);
  }

  async abrirModal() {
    return await this.modalComponent.abrir();
  }
}
