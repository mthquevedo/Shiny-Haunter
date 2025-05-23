import { IntroArea } from "../../components/IntroArea";
import { PaginationButtons } from "../../components/PaginationButtons";
import { PokeCardsArea } from "../../components/PokeCardsArea";

export function Pokedex() {
    return (
        <>
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Pokédex"
                    description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
                />
                <IntroArea.SearchBar />
            </IntroArea.Root>

            <section className="flex flex-col justify-around gap-5 w-full h-75v">
                <PokeCardsArea />

                <PaginationButtons />
            </section>
        </>
    );
}