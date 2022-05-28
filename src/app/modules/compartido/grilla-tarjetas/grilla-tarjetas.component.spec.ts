import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaTarjetasComponent } from './grilla-tarjetas.component';

xdescribe('GrillaTarjetasComponent', () => {
  let component: GrillaTarjetasComponent;
  let fixture: ComponentFixture<GrillaTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaTarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
