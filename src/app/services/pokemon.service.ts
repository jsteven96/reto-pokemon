import { RespuestaServicioPokemon } from './../models/respuesta-servicio-pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  consultarPokemones(): Observable<RespuestaServicioPokemon> {
    return this.http.get<RespuestaServicioPokemon>('https://pokeapi.co/api/v2/pokemon/');
  }
}
