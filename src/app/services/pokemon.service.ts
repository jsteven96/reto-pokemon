import { Pokemon } from './../models/pokemon.model';
import { RespuestaServicioPokemon } from './../models/respuesta-servicio-pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  consultarPokemones(): Observable<RespuestaServicioPokemon> {
    const params = new HttpParams().set('limit', '100000');
    return this.http.get<RespuestaServicioPokemon>(
      'https://pokeapi.co/api/v2/pokemon',
      { params }
    );
  }

  consultarPokemon(nombre: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  }
}
