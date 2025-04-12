import { upperFirstLetter } from "../utils/pokemon.utils";
import { pokemonClient } from "./pokemon.client";

const LIMIT = 10;
class PokemonServices {
    async getLimitedPokemons(offset = 0, limit = LIMIT) {
        const { results, ...pagination } = await pokemonClient.listPokemons(offset, limit);

        const pokemons = await Promise.all(
            results.map(({ name }) => pokemonClient.getPokemonByName(name))
        );

        return { pokemons, ...pagination };
    }

    async getAllPokemons(offset = 0, limit = 1302) {
        const { results } = await pokemonClient.listPokemons(offset, limit);

        const pokemonData = await Promise.all(
            results.map(({ name }) => pokemonClient.getPokemonByName(name))
        );

        const allPokemonList = pokemonData.map((pokemon) => ({
            id: pokemon.id,
            name: upperFirstLetter(pokemon.name)
        }))

        return allPokemonList;
    }

    async getSinglePokemon(name: string) {
        const pokemon = [];
        const profile = await pokemonClient.getPokemonByName(name);

        pokemon.push(profile);

        return pokemon;
    }
}

export const pokemonServices = new PokemonServices();