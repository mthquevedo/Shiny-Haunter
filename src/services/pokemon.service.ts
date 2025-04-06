import { pokemonClient } from "./pokemon.client";
import { upperFirstLetter } from "../utils/pokemon.utils";

const LIMIT = 10;
class PokemonServices {
    async getLimitedPokemons(offset = 0, limit = LIMIT) {
        const { results, ...pagination } = await pokemonClient.listPokemons(offset, limit);

        const pokemons = await Promise.all(
            results.map(({ name }) => pokemonClient.getPokemonByName(name))
        );

        return { pokemons, ...pagination };
    }

    async getAllPokemons(offset = 0, limit = 1302): Promise<string[]> {
        const { results } = await pokemonClient.listPokemons(offset, limit);
        return results.map(pokemon => upperFirstLetter(pokemon.name));
    }
}

export const pokemonServices = new PokemonServices();