import { FooterPage } from "../../components/FooterPage";
import { HeaderPage } from "../../components/HeaderPage";
import { LoadingCards } from "../../components/LoadingCards";
import { PokeCard } from "../../components/PokeCard";
import { SearchForm } from "../../components/SearchForm";
import { upperFirstLetter } from "../../utils/pokemon.utils";
import { usePokedex } from "./pokedex.hook";

export function Pokedex() {
    const { pokemons, handleNextPage, handlePreviousPage, isLoading, next, previous } = usePokedex();

    return (
        <section className="bg-gradient-to-tl from-backcolor to-white w-95v h-100v pt-11 pb-9 px-10 flex flex-1 flex-col justify-between">
            <HeaderPage />

            <SearchForm
                formTitle="Pokédex"
                formDescription="Procure por um pokémon específico ou explore a pokedex de cada região"
            />

            <section className="flex flex-col justify-around gap-5 w-full pt-5 h-75v">
                {isLoading ?
                    <LoadingCards />
                    :
                    <div className="flex item-center justify-between flex-wrap gap-5">
                        {pokemons && pokemons.map(pokemon => {
                            return (
                                <PokeCard
                                    id={pokemon.id}
                                    key={pokemon.id}
                                    name={upperFirstLetter(pokemon.name)}
                                    thumbnailDefault={pokemon.sprites.other?.["official-artwork"].front_default || ""}
                                    thumbnailShiny={pokemon.sprites.other?.["official-artwork"].front_shiny || ""}
                                    types={pokemon.types}
                                />
                            );
                        })}
                    </div>
                }

                <div className="flex gap-4 items-center justify-center">
                    <button
                        onClick={handlePreviousPage}
                        disabled={!previous}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-4 disabled:active:scale-100 active:scale-95 font-medium text-sm shadow-md transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={!next}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-4 disabled:active:scale-100 active:scale-95 font-medium text-sm shadow-md transition"
                    >
                        Próximo
                    </button>
                </div>
            </section>

            <FooterPage />
        </section>
    );
}