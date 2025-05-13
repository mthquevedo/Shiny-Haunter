import { PaginationButtons } from "../../components/paginationButtons";
import { PokeCardsArea } from "../../components/PokeCardsArea";
import { SearchArea } from "../../components/SearchArea";

export function Pokedex() {
    return (
        <>
            <SearchArea
                title="Pokédex"
                description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
            />

            <section className="flex flex-col justify-around gap-5 w-full h-75v">
                <PokeCardsArea />

                <PaginationButtons />
            </section>
        </>
    );
}