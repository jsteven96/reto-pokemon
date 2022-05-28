import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCompartidoComponent } from './formulario-compartido.component';

xdescribe('FormularioCompartidoComponent', () => {
  let component: FormularioCompartidoComponent;
  let fixture: ComponentFixture<FormularioCompartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCompartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCompartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
