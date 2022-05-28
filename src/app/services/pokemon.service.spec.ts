import { Pokemon } from './../models/pokemon.model';
import { RespuestaServicioPokemon } from './../models/respuesta-servicio-pokemon.model';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let pokemonService: PokemonService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    pokemonService = TestBed.inject(PokemonService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('debio ser creado el servicio', () => {
    expect(pokemonService).toBeTruthy();
  });

  describe('Pruebas para consultarPokemones', () => {
    it('deberia retorna un objeto de respuesta', (doneFn) => {
      const mockData: RespuestaServicioPokemon = {
        count: 0,
        results: [
          {
            name: 'Pikachu',
          },
        ],
      };

      pokemonService.consultarPokemones().subscribe((res) => {
        expect(res).toEqual(mockData);
        doneFn();
      });

      const req = httpController.expectOne(
        'https://pokeapi.co/api/v2/pokemon?limit=100000'
      );
      req.flush(mockData);
      httpController.verify();
    });
  });

  describe('Pruebas unitarias para el metodo consultarPokemon', () => {
    it('deberia retornar un objeto de tipo Pokemon', (doneFn) => {
      const mockData: Pokemon = {
        name: 'Pikachu',
      };

      pokemonService.consultarPokemon('pikachu').subscribe((res) => {
        expect(res).toEqual(mockData);
        doneFn();
      });

      const req = httpController.expectOne(
        'https://pokeapi.co/api/v2/pokemon/pikachu'
      );
      req.flush(mockData);
      httpController.verify();
    });
  });
});
