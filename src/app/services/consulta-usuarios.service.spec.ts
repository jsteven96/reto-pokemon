import { TestBed } from '@angular/core/testing';

import { ConsultaUsuariosService } from './consulta-usuarios.service';

describe('ConsultaUsuariosService', () => {
  let service: ConsultaUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
