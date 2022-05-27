import { PokemonService } from './../../../services/pokemon.service';
import { Pokemon } from './../../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {
  @Input() nombrePokemon!: string;
  pokemon: Pokemon;

  constructor(private servicioPokemon: PokemonService) {
    this.pokemon = {
      name: ''
    }
  }

  ngOnInit(): void {
    this.servicioPokemon.consultarPokemon(this.nombrePokemon).subscribe((res) => {
      this.pokemon = res;
    });
  }
}
