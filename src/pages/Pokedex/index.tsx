import { PaginationButtons } from "../../components/paginationButtons";
import { PokeCardsArea } from "../../components/PokeCardsArea";
import { IntroArea } from "../../components/introArea";

export function Pokedex() {
    return (
        <>
            <IntroArea
                title="Pokédex"
                description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
                hasSearch
            />

            <section className="flex flex-col justify-around gap-5 w-full h-75v">
                <PokeCardsArea />

                <PaginationButtons />
            </section>
        </>
    );
}