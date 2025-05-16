import { PokemonWithImages } from "../constants/pokemon.constants";
import { upperFirstLetter } from "../utils/pokemon.utils";
import { pokemonClient } from "./pokemon.client";

function getPokemonImageUrl(variant: "default" | "shiny", id: number) {
    const imgUrl = `https://res.cloudinary.com/dgk1m8bko/image/upload/f_auto,q_auto,w_176/pokemon/${variant}/${id}.png`;

    return imgUrl ?? "";
}

class PokemonServices {
    async getLimitedPokemons(offset: number, limit: number) {
        const { results, ...pagination } = await pokemonClient.listPokemons(offset, limit);

        const pokemons: PokemonWithImages[] = await Promise.all(
            results.map(async ({ name }) => {
                const data = await pokemonClient.getPokemonByName(name);

                return {
                    ...data,
                    thumbnailDefault: getPokemonImageUrl("default", data.id),
                    thumbnailShiny: getPokemonImageUrl("shiny", data.id),
                };
            })
        );

        return { pokemons, ...pagination };
    }

    async getAllPokemons(offset = 0, limit = 1302) {
        const { results } = await pokemonClient.listPokemons(offset, limit);

        const pokemonData = await Promise.all(
            results.map(({ name }) => pokemonClient.getPokemonByName(name))
        );

        const allPokemonList = pokemonData.map((pokemon) => ({
            value: pokemon.id,
            label: upperFirstLetter(pokemon.name)
        }))

        return allPokemonList;
    }

    async getSinglePokemon(name: string) {
        const data = await pokemonClient.getPokemonByName(name);

        return {
            ...data,
            thumbnailDefault: getPokemonImageUrl("default", data.id),
            thumbnailShiny: getPokemonImageUrl("shiny", data.id),
        };
    }
}

export const pokemonServices = new PokemonServices();