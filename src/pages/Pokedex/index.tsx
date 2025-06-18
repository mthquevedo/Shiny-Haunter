import { IntroArea } from "../../components/IntroArea";
import { PaginationButtons } from "../../components/PaginationButtons";
import { PokeCardsArea } from "../../components/PokeCardsArea";
import { HiddenScrollBar } from "../../components/hiddenScrollBar";

export function Pokedex() {
    return (
        <section className="flex flex-col items-center justify-start gap-2 lg:gap-4 xl:gap-3 2xl:gap-8 h-[91%]">
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Pokédex"
                    description="Explore sua Pokédex para marcar os Pokémon já capturados ou os shinies que você quer caçar."
                />
                <IntroArea.SearchBar />
            </IntroArea.Root>

            <section className="flex w-full h-[86%] xsm:h-[93%] md:h-[91%] lg:h-[90%] xl:h-[91%]">
                <HiddenScrollBar>
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-1 2xl:gap-5 size-full mb-4 xsm:mb-6 lg:mb-0">
                        <PokeCardsArea />

                        <PaginationButtons />
                    </div>
                </HiddenScrollBar>
            </section>
        </section>
    );
}