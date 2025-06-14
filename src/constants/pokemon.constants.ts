import { PokemonType } from "pokenode-ts";

export const LIMIT_CARDS = 18;

export interface PokeProps {
    id: number;
    key: number;
    name: string;
    thumbnailDefault: string;
    thumbnailShiny: string;
    types: PokemonType[];
}

export interface genericSubListItem {
    id: number;
    name: string;
    image: string;
    types: PokemonType[];
    date?: string;
}

export interface genericSubListProps {
    list: genericSubListItem[];
}

export type ViewType = "grid" | "list";

export interface genericPokemon {
    pokemon: genericSubListItem;
}