import { ConsultaUsuariosService } from './../../services/consulta-usuarios.service';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({})
class BlankCmp {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let consultaUsuariosService: jasmine.SpyObj<ConsultaUsuariosService>;
  let location: Location;

  beforeEach(async () => {
    const consultaUsuariosServiceSpy = jasmine.createSpyObj(
      'ConsultaUsuariosService',
      ['cambiarEstadoUsuarioTodosLosUsuarios']
    );
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: BlankCmp,
          },
        ]),
      ],
      providers: [
        {
          provide: ConsultaUsuariosService,
          useValue: consultaUsuariosServiceSpy,
        },
      ],
      declarations: [HomeComponent, BlankCmp],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    consultaUsuariosService = TestBed.inject(
      ConsultaUsuariosService
    ) as jasmine.SpyObj<ConsultaUsuariosService>;
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Pruebas para #cerrarSesion', () => {
    it('deberia llamar a cambiarEstadoUsuarioTodosLosUsuarios con estado false', () => {
      consultaUsuariosService.cambiarEstadoUsuarioTodosLosUsuarios.and.callThrough();
      component.cerrarSesion();
      expect(
        consultaUsuariosService.cambiarEstadoUsuarioTodosLosUsuarios
      ).toHaveBeenCalledOnceWith(false);
    });

    it('deberia redirigir al usuario al componente correspondiente', fakeAsync(() => {
      component.cerrarSesion();
      tick();
      expect(location.path()).toBe('/');
    }));
  });
});
