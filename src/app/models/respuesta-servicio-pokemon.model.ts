import { Pokemon } from './pokemon.model';
export interface RespuestaServicioPokemon {
    count: number;
    next?: string;
    previous?: string;
    results: Pokemon[];
}