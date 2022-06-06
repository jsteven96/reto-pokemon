import { of } from 'rxjs';
import { Pokemon } from './../../../../models/pokemon.model';
import { PokemonService } from './../../../../services/pokemon.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComponent } from './tarjeta.component';

xdescribe('TarjetaComponent', () => {
  let component: TarjetaComponent;
  let fixture: ComponentFixture<TarjetaComponent>;
  let pokemonService: jasmine.SpyObj<PokemonService>;
  const mockPokemon: Pokemon[] = [
    {
      id: 1,
      name: 'Pikachu',
    },
    {
      id: 2,
      name: 'Bulbasaur',
    },
    {
      id: 3,
      name: 'Clefairy',
    },
  ];

  beforeEach(async () => {
    const pokemonServiceSpy = jasmine.createSpyObj<PokemonService>(
      'PokemonService',
      ['consultarPokemon']
    );
    pokemonServiceSpy.consultarPokemon.and.returnValue(of(mockPokemon[0]));
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: PokemonService,
          useValue: pokemonServiceSpy,
        },
      ],
      declarations: [TarjetaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComponent);
    pokemonService = TestBed.inject(PokemonService) as jasmine.SpyObj<PokemonService>;
    component = fixture.componentInstance;
    component.nombrePokemon = 'Pikachu';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia emitir un pokemon al seleccionar el componente', (doneFn) => {
    let pokemonSeleccionado: Pokemon | undefined;
    component.pokemonSeleccionado.subscribe((datos) => {
      pokemonSeleccionado = datos;
      doneFn();
    });
    component.seleccionarTarjeta();
    fixture.detectChanges();
    expect(pokemonSeleccionado).toEqual(component.pokemonSeleccionado);
  });
});
