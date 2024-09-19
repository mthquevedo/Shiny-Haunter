// import { useEffect, useState } from "react";
import { FooterPage } from "../../components/FooterPage";
import { HeaderPage } from "../../components/HeaderPage";
import { PokeCard } from "../../components/PokeCard";
import { SearchForm } from "../../components/SearchForm";
// import { NamedAPIResourceList, Pokemon, PokemonClient } from 'pokenode-ts';

export function Pokedex() {
    // const [pokemon, setPokemons] = useState<NamedAPIResourceList>()
    // const [pokemon, setPokemons] = useState<Pokemon>()

    // useEffect(() => {
    //     (async () => {
    //         const api = new PokemonClient();

    //         await api
    //             .listPokemons(0, 10)
    //             .then((data) => console.log())
    //         // .then((data) => setPokemons(data))
    //     })()
    // }, [])

    // console.log(pokemon);


    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col justify-between">
            <HeaderPage />

            <SearchForm
                formTitle="Pokédex"
                formDescription="Procure por um pokémon específico ou explore a pokedex de cada região"
            />

            {/* {pokemon && <img src={pokemon.results ?? ""} />} */}
            {/* {pokemon && <img src={pokemon.sprites.other?.["official-artwork"].front_default ?? ""} />} */}

            {/* 
           <pre>
               {pokemons && JSON.stringify(pokemons, null, 2)}
           </pre> */}

            <section className="flex flex-col gap-1 w-full h-75v">
                <div>
                    <p className="bg-slate-500 text-white p-1">regiões...</p>
                </div>
                <div className="flex flex-wrap gap-4 pl-1">
                    {/* {pokemons.map(pokemon => {
                        return (
                            <PokeCard
                                id={999}
                                name="Miraidon"
                                region="Paldea"
                                thumbnail="./src/assets/1008.png"
                                firstType="electric"
                                secondType="dragon"
                            />
                        );
                    })} */}

                    <PokeCard
                        id={999}
                        name="Miraidon"
                        region="Paldea"
                        thumbnail="./src/assets/1008.png"
                        firstType="electric"
                        secondType="dragon"
                    />
                </div>
            </section>

            <FooterPage />
        </section>
    );
}