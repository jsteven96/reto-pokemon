import { ModalComponent } from './../modal/modal.component';
import { ModalConfig } from './../../../models/modal-config.model';
import { RespuestaServicioPokemon } from './../../../models/respuesta-servicio-pokemon.model';
import { PokemonService } from './../../../services/pokemon.service';
import { Pokemon } from './../../../models/pokemon.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grilla-tarjetas',
  templateUrl: './grilla-tarjetas.component.html',
  styleUrls: ['./grilla-tarjetas.component.scss'],
})
export class GrillaTarjetasComponent implements OnInit {
  pokemones: Pokemon[] = [];
  pokemonesFiltrado: Pokemon[] = [];
  pokemonSeleccionado: Pokemon | any;
  configuracionModal: ModalConfig;

  @ViewChild('modal', { static: true }) private componenteModal:
    | ModalComponent
    | any;

  constructor(private pokemonService: PokemonService) {
    this.configuracionModal = {
      titulo: 'Detalle',
      etiquetaBotonCerrar: 'Cerrar',
      alCerrar: () => true,
      ocultarBotonDescartar: () => true,
    };
  }

  ngOnInit(): void {
    this.pokemonService
      .consultarPokemones()
      .subscribe((res: RespuestaServicioPokemon) => {
        this.pokemones = res.results;
        this.filtrarPokemones('');
      });
  }

  filtrarPokemones(criterio: string) {
    if (criterio != '') {
      this.pokemonesFiltrado = this.pokemones.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(criterio.toLowerCase())
      );
    } else {
      this.pokemonesFiltrado = this.pokemones.slice(0, 20);
    }
  }

  analizarCriterio(criterio: string) {
    this.filtrarPokemones(criterio);
  }

  async mostrarDetalle(pokemon: Pokemon) {
    this.pokemonSeleccionado = pokemon;
    await this.abrirModal().then((_) => {});
  }

  async abrirModal() {
    return await this.componenteModal.abrir();
  }
}
