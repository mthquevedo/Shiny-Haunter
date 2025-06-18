import { ScrollArea } from "radix-ui";
import { PokeCardsArea } from "../../components/PokeCardsArea";
import { IntroArea } from "../../components/introArea";
import { PaginationButtons } from "../../components/paginationButtons";

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

            <section className="flex flex-col w-full h-[75%] xl:h-[80%]">
                <ScrollArea.Root className="size-full">
                    <ScrollArea.Viewport className="size-full">
                        <PokeCardsArea />

                        <PaginationButtons />
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar
                        className="hidden"
                        orientation="vertical"
                    >
                        <ScrollArea.Thumb className="relative hidden rounded-full bg-neutral-500 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-10 before:min-w-10 before:-translate-x-1/2 before:-translate-y-1/2" />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Corner className="bg-black" />
                </ScrollArea.Root >
            </section>

        </>
    );
}