import { IntroArea } from "../../components/IntroArea";
import { PaginationButtons } from "../../components/PaginationButtons";
import { PokeCardsArea } from "../../components/PokeCardsArea";

export function Pokedex() {
    return (
        <>
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Pokédex"
                    description="Explore sua Pokédex para marcar os Pokémon já capturados ou os shinies que você quer caçar."
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