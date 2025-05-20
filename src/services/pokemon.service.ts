import { upperFirstLetter } from "../utils/pokemon.utils";
import { serializePokemon } from "../utils/pokemonSerializer";
import { pokemonClient } from "./pokemon.client";

class PokemonServices {
    async getLimitedPokemons(offset: number, limit: number) {
        const { results, ...pagination } = await pokemonClient.listPokemons(offset, limit);

        const pokemons = await Promise.all(
            results.map(async ({ name }) => {
                const data = await pokemonClient.getPokemonByName(name);
                return serializePokemon(data);
            })
        );

        return { pokemons, ...pagination };
    }

    async getSinglePokemon(name: string) {
        const data = await pokemonClient.getPokemonByName(name);
        return serializePokemon(data);
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
}

export const pokemonServices = new PokemonServices();