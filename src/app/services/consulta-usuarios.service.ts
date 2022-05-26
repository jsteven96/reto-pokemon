import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsultaUsuariosService {
  constructor() {}

  buscarUsuarioEnLista(usuarios: User[], criterio: string) {
    return usuarios.find((user) => user.nombre === criterio);
  }

  consultarUsuarios(): User[] {
    const stringData = sessionStorage.getItem('datosUsuario');
    return JSON.parse(stringData ? stringData : '[]');
  }

  cambiarEstadoUsuario(nombre: string, estado: boolean) {
    const stringData = sessionStorage.getItem('datosUsuario');
    const datosUsuarios: User[] = JSON.parse(stringData ? stringData : '[]');
    const nuevoArreglo = datosUsuarios.map((elemento) => {
      if (elemento.nombre === nombre) {
        return {
          nombre: elemento.nombre,
          contrasenia: elemento.contrasenia,
          autenticado: estado,
        }
      }
      return elemento;
    });
    sessionStorage.setItem('datosUsuario', JSON.stringify(nuevoArreglo));
  }

  buscarUsuarioAutenticado() {
    const stringData = sessionStorage.getItem('datosUsuario');
    const datosUsuarios: User[] = JSON.parse(stringData ? stringData : '[]');
    return datosUsuarios.some(usuario => usuario.autenticado);
  }
}
