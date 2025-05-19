import { Pokemon, PokemonType } from "pokenode-ts";

export const LIMIT_CARDS = 12;

export interface PokeCardProps {
    id?: number;
    name?: string;
    thumbnailDefault?: string;
    thumbnailShiny?: string;
    types?: PokemonType[];
}

export interface PokemonWithImages extends Pokemon {
    thumbnailDefault: string;
    thumbnailShiny: string;
}
