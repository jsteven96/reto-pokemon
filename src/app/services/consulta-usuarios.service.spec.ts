import { User } from './../models/user.model';
import { TestBed } from '@angular/core/testing';

import { ConsultaUsuariosService } from './consulta-usuarios.service';

describe('ConsultaUsuariosService', () => {
  let service: ConsultaUsuariosService;
  const usuarios: User[] = [
    {
      nombre: 'juan',
      autenticado: false,
      contrasenia: 'ejemplo',
    },
    {
      nombre: 'amelia',
      autenticado: true,
      contrasenia: 'ejemplo',
    },
  ];
  let store = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaUsuariosService],
    });
    service = TestBed.inject(ConsultaUsuariosService);

    const mockSessionStorage = {
      getItem: (llave: string): string => {
        return llave in store ? (store as any)[llave] : null;
      },
      setItem: (llave: string, value: string) => {
        (store as any)[llave] = `${value}`;
      },
    };
    spyOn(sessionStorage, 'getItem').and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem').and.callFake(mockSessionStorage.setItem);
  });

  afterEach(() => {
    store = {};
  });

  describe('Tests para ConsultaUsuariosService', () => {
    it('buscarUsuarioEnLista deberia retornar un usuario a partir de un criterio', () => {
      expect(service.buscarUsuarioEnLista(usuarios, 'juan', 'ejemplo')).toEqual({
        nombre: 'juan',
        autenticado: false,
        contrasenia: 'ejemplo',
      });
    });

    it('consultarUsuarios deberia retornar una lista desde sesion storage si tiene datos', () => {
      store = { datosUsuario: JSON.stringify(usuarios) };
      expect(service.consultarUsuarios()).toEqual(usuarios);
    });

    it('consultarUsuarios deberia retornar una lista vacia si en sesion storage no hay datos', () => {
      expect(service.consultarUsuarios()).toEqual([]);
    });

    it('cambiarEstadoUsuario deberia dejar el atributo autenticado del objeto encontrado con el nombre segun el estado insertado', () => {
      store = { datosUsuario: JSON.stringify(usuarios) };
      service.cambiarEstadoUsuario('juan', true);
      const datosStore: User[] = JSON.parse((store as any)['datosUsuario']);
      expect(datosStore[0]).toEqual({
        nombre: 'juan',
        autenticado: true,
        contrasenia: 'ejemplo',
      });
    });

    it('cambiarEstadoUsuario deberia dejar una lista vacia en el atributo datosUsuario de sesionStorage si originalmente no habia nada', () => {
      store = {};
      service.cambiarEstadoUsuario('juan', true);
      const datosStore: User[] = JSON.parse((store as any)['datosUsuario']);
      expect(datosStore).toEqual([]);
    });

    it('cambiarEstadoUsuarioTodosLosUsuarios deberia dejar el atributo autenticado de todos los objetos del arreglo segun el estado introducido', () => {
      store = { datosUsuario: JSON.stringify(usuarios) };
      service.cambiarEstadoUsuarioTodosLosUsuarios(true);
      const datosStore: User[] = JSON.parse((store as any)['datosUsuario']);
      datosStore.forEach((elemento) => expect(elemento.autenticado).toBe(true));
    });

    it('cambiarEstadoUsuarioTodosLosUsuarios deberia dejar una lista vacia en atributo datosUsuario de sessionStorage si originalmente no habia nada', () => {
      store = {};
      service.cambiarEstadoUsuarioTodosLosUsuarios(true);
      const datosStore: User[] = JSON.parse((store as any)['datosUsuario']);
      expect(datosStore).toEqual([]);
    });

    it('buscarUsuarioAutenticado deberia retornar verdadero si en el arreglo existe un objeto con atributo autenticado como true', () => {
      store = { datosUsuario: JSON.stringify(usuarios) };
      const hayUsuarioAutenticado = service.buscarUsuarioAutenticado();
      expect(hayUsuarioAutenticado).toBe(true);
    });

    it('buscarUsuarioAutenticado deberia retornar falso si no hay datos en el sesionStorage', () => {
      store = {};
      const hayUsuarioAutenticado = service.buscarUsuarioAutenticado();
      expect(hayUsuarioAutenticado).toBe(false);
    });
  });
});
