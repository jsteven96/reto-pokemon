import { RespuestaServicioPokemon } from './../../../models/respuesta-servicio-pokemon.model';
import { PokemonService } from './../../../services/pokemon.service';
import { Pokemon } from './../../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-tarjetas',
  templateUrl: './grilla-tarjetas.component.html',
  styleUrls: ['./grilla-tarjetas.component.scss']
})
export class GrillaTarjetasComponent implements OnInit {

  pokemones: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.consultarPokemones().subscribe((res: RespuestaServicioPokemon) => {
      this.pokemones = res.results;
    });
  }

}
