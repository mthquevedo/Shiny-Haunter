import { Pokemon } from "pokenode-ts";
import { PokeProps } from "../constants/pokemon.constants";
import { idValidation, nameValidation } from "./cardValidation";

function getPokemonImageUrl(variant: "default" | "shiny", id: number) {
    const imgUrl = `https://res.cloudinary.com/dgk1m8bko/image/upload/f_auto,q_auto,w_176/pokemon/${variant}/${id}.png`;

    return imgUrl ?? "../assets/pokeball-icon-11.png";
}

export function serializePokemon(pokemon: Pokemon): PokeProps {
    return {
        id: idValidation(pokemon.id),
        key: idValidation(pokemon.id),
        name: nameValidation(pokemon.name),
        thumbnailDefault: getPokemonImageUrl("default", pokemon.id),
        thumbnailShiny: getPokemonImageUrl("shiny", pokemon.id),
        types: pokemon.types,
    };
}