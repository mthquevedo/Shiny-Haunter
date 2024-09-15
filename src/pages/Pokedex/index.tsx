// import { NamedAPIResourceList, PokemonClient } from "pokenode-ts";
// import { useEffect, useState } from "react";
import { FooterPage } from "../../components/FooterPage";
import { HeaderPage } from "../../components/HeaderPage";
import { PokedexFrame } from "../../components/PokedexFrame/inde";
import { SearchForm } from "../../components/SearchForm";

export function Pokedex() {
    // const [pokemon, setPokemon] = useState<NamedAPIResourceList>()

    // useEffect(() => {
    //     const api = new PokemonClient();
    //     (async () => {
    //         return await api.listPokemons(0, 10).then((data) => {
    //             setPokemon(data)
    //         })
    //     })()
    // }, [])

    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col justify-between">
            <HeaderPage />

            <SearchForm
                formTitle="Pokédex"
                formDescription="Procure por um pokémon específico ou explore a pokedex de cada região"
            />

            {/* {pokemon && <img src={pokemon.sprites.other?.["official-artwork"].front_default ?? ""} />} */}
            {/* 
            <pre>
                {pokemon && JSON.stringify(pokemon, null, 2)}
            </pre> */}

            <PokedexFrame />

            <FooterPage />
        </section>
    );
}