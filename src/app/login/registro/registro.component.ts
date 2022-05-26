import { ConsultaUsuariosService } from './../../services/consulta-usuarios.service';
import { User } from './../../models/user.model';
import { SharedFormService } from './../../services/shared-form.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registroFormulario: FormGroup | any;
  usuarioRegistrado = false;
  mostrarAlerta = false;
  usuarios: User[] = [];

  constructor(private sharedFormService: SharedFormService, private consultaUsuariosService: ConsultaUsuariosService) { }

  ngOnInit(): void {
    this.registroFormulario = this.sharedFormService.formularioCompartido();
  }

  obtenerUsuarios() {
    this.usuarios = this.consultaUsuariosService.consultarUsuarios();
  }

  registrarUsuario () {
    this.obtenerUsuarios();
    console.log(this.consultaUsuariosService.buscarUsuarioEnLista(this.usuarios, this.registroFormulario.value.usuario))
    if (!this.consultaUsuariosService.buscarUsuarioEnLista(this.usuarios, this.registroFormulario.value.usuario)) {
      const usuarioFormulario: User = {
        nombre: this.registroFormulario.value.usuario,
        contrasenia: this.registroFormulario.value.contrasenia,
        autenticado: false
      };
      this.usuarios.push(usuarioFormulario);
      sessionStorage.setItem('datosUsuario', JSON.stringify(this.usuarios));
    } else {
      this.mostrarAlerta = true;
      this.registroFormulario.reset();
    }
  }
}
