import { ConsultaUsuariosService } from './../services/consulta-usuarios.service';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

function fakeEstadoRouter(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;
  let serviceStub: jasmine.SpyObj<ConsultaUsuariosService>;
  const dummyRoute = {} as ActivatedRouteSnapshot;
  const fakeUrls = ['/', '/home'];

  beforeEach(() => {
    serviceStub = jasmine.createSpyObj<ConsultaUsuariosService>(
      'ConsultaUsuariosService',
      ['buscarUsuarioAutenticado']
    );
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    guard = new AuthGuard(serviceStub as ConsultaUsuariosService, routerSpy);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('AuthGuard de forma aislada', () => {
    describe('Cuando el usuario esta logueado', () => {
      beforeEach(() => {
        serviceStub.buscarUsuarioAutenticado.and.returnValue(true);
      });

      it('deberia conceder acceso a home', () => {
        const accedoConcedido = guard.canActivate(
          dummyRoute,
          fakeEstadoRouter(fakeUrls[1])
        );
        expect(accedoConcedido).toBeTrue();
      });
    });

    describe('Cuando el usuario no esta logueado', () => {
      beforeEach(() => {
        routerSpy.navigate.and.returnValue(Promise.resolve(true));
        serviceStub.buscarUsuarioAutenticado.and.returnValue(false);
      });

      it('deberia no habilitar acceso a home', fakeAsync(() => {
        guard.canActivate(
          dummyRoute,
          fakeEstadoRouter(fakeUrls[1])
        );
        tick();
        expect(routerSpy.navigate).toHaveBeenCalledWith(
          ['']);
      }));
    });
  });
});
