import { useSelector } from "react-redux";
import { FooterPage } from "../../components/FooterPage";
import { HeaderPage } from "../../components/HeaderPage";
import { LoadingCards } from "../../components/LoadingCards";
import { PokeCard } from "../../components/PokeCard";
import { SearchArea } from "../../components/SearchArea";
import { usePokedex } from "../../hooks/usePokedex";
import { RootState } from "../../store";
import { idValidation, imageValidation, nameValidation, typeValidation } from "../../utils/cardValidation";

export function Pokedex() {
    const pokemonList = useSelector((state: RootState) => state.pokedexList.list);
    const isPageLoading = useSelector((state: RootState) => state.pokedexList.loading);
    const { handleNextPage, handlePreviousPage, next, previous } = usePokedex();

    return (
        <section className="bg-gradient-to-tl from-backcolor to-white w-95v h-100v pt-11 pb-9 px-10 flex gap-4 flex-col justify-between">
            <HeaderPage />

            <SearchArea
                title="Pokédex"
                description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
            />

            <section className="flex flex-col justify-around gap-5 w-full h-75v">
                {isPageLoading || pokemonList.length === 0 ?
                    <LoadingCards />
                    :
                    <div className="flex item-center justify-between flex-wrap gap-5">
                        {pokemonList.map(pokemon => {
                            return (
                                <PokeCard
                                    id={idValidation(pokemon.id)}
                                    key={pokemon.id + pokemon.name}
                                    name={nameValidation(pokemon.name)}
                                    thumbnailDefault={imageValidation(pokemon.sprites?.other?.["official-artwork"]?.front_default)}
                                    thumbnailShiny={imageValidation(pokemon.sprites?.other?.["official-artwork"]?.front_shiny)}
                                    types={typeValidation(pokemon.types)}
                                />
                            )
                        })}
                    </div>
                }

                <div className="flex gap-4 items-center justify-center">
                    <button
                        onClick={handlePreviousPage}
                        disabled={!previous}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-5 disabled:active:scale-100 active:scale-[0.98] font-medium text-sm shadow-md transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={!next}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-4 disabled:active:scale-100 active:scale-[0.98] font-medium text-sm shadow-md transition"
                    >
                        Próximo
                    </button>
                </div>
            </section>

            <FooterPage />
        </section>
    );
}