import { ModalConfig } from './../../models/modal-config.model';
import { Router } from '@angular/router';
import { ConsultaUsuariosService } from './../../services/consulta-usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  criterio = '';

  constructor(
    private consultaUsuarioService: ConsultaUsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  cerrarSesion() {
    this.consultaUsuarioService.cambiarEstadoUsuarioTodosLosUsuarios(false);
    this.router.navigate(['/']);
  }
}
