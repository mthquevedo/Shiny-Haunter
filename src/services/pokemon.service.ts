import { pokemonClient } from "./pokemon.client";

const LIMIT = 10;

export async function getPokemons(offset = 0, limit = LIMIT) {
    const { results, ...pagination } = await pokemonClient.listPokemons(offset, limit);

    const pokemons = await Promise.all(
        results.map(({ name }) => pokemonClient.getPokemonByName(name))
    );

    return { pokemons, ...pagination };
}