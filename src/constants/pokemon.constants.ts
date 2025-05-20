import { PokemonType } from "pokenode-ts";

export const LIMIT_CARDS = 14;

export interface PokeProps {
    id: number;
    key: number;
    name: string;
    thumbnailDefault: string;
    thumbnailShiny: string;
    types: PokemonType[];
}