import { RespuestaServicioPokemon } from './../../../models/respuesta-servicio-pokemon.model';
import { PokemonService } from './../../../services/pokemon.service';
import { Pokemon } from './../../../models/pokemon.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grilla-tarjetas',
  templateUrl: './grilla-tarjetas.component.html',
  styleUrls: ['./grilla-tarjetas.component.scss']
})
export class GrillaTarjetasComponent implements OnInit {

  pokemones: Pokemon[] = [];
  pokemonesFiltrado: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.consultarPokemones().subscribe((res: RespuestaServicioPokemon) => {
      this.pokemones = res.results;
      this.filtrarPokemones('');
    });
  }

  filtrarPokemones(criterio: string) {
    if(criterio != ''){
      this.pokemonesFiltrado = this.pokemones.filter(pokemon => pokemon.name.includes(criterio));
    } else {
      this.pokemonesFiltrado = this.pokemones.slice(0, 20);
    }
  }

  analizarCriterio(criterio: string) {
    this.filtrarPokemones(criterio);
  }
}
