import { FooterPage } from "../../components/FooterPage";
import { HeaderPage } from "../../components/HeaderPage";
import { PokeCard } from "../../components/PokeCard";
import { SearchForm } from "../../components/SearchForm";
import { upperFirstLetter } from "../../utils/pokemon.utils";
import { usePokedex } from "./pokedex.hook";

export function Pokedex() {
    const { pokemons, handleNextPage, handlePreviousPage, isLoading, next, previous } = usePokedex();

    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col justify-between">
            <HeaderPage />

            <SearchForm
                formTitle="Pokédex"
                formDescription="Procure por um pokémon específico ou explore a pokedex de cada região"
            />

            <section className="flex flex-col gap-1 w-full h-75v">
                <div>
                    <p className="bg-slate-500 text-white p-1 my-2">regiões...</p>
                </div>
                <div className="flex flex-wrap gap-4 pl-1">
                    {pokemons && pokemons.map(pokemon => {
                        return (
                            <PokeCard
                                id={pokemon.id}
                                name={upperFirstLetter(pokemon.name)}
                                region="Paldea"
                                thumbnail={pokemon.sprites.other?.["official-artwork"].front_shiny || ""}
                                firstType={pokemon.types[0].type.name}
                                secondType={pokemon.types[1] ? pokemon.types[1].type.name : ""}
                            />

                        );
                    })}


                    {/* <PokeCard
                        id={999}
                        name="Miraidon"
                        region="Paldea"
                        thumbnail="./src/assets/1008.png"
                        firstType="electric"
                        secondType="dragon"
                    /> */}
                </div>
            </section>

            <button onClick={handlePreviousPage} disabled={!previous}>Anterior</button>
            <button onClick={handleNextPage} disabled={!next}>Próximo</button>

            <FooterPage />
        </section>
    );
}