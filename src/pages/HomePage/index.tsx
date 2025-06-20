
import { useSelector } from "react-redux";
import { HeroBanner } from "../../components/heroBanner";
import { HiddenScrollBar } from "../../components/hiddenScrollBar";
import { LastPokemonBoard } from "../../components/LastPokemonBoard";
import { RootState } from "../../store";

export function HomePage() {
    const lastWished = useSelector((state: RootState) => state.wishlist.list).slice(-4);
    const lastCatched = useSelector((state: RootState) => state.catchlist.list).slice(-4);

    return (
        <section className="w-full h-[95%]">
            <HiddenScrollBar>
                <section className="flex flex-col items-center justify-start gap-5 x93:gap-3 xsm:gap-6 md:gap-8 lg:gap-7 2xl:gap-10 size-full">
                    <HeroBanner />

                    <section className="flex flex-col w-full h-[56%] 2xl:justify-between lg:flex-row gap-5 x93:gap-3 xsm:gap-6 md:gap-8 lg:gap-10">
                        <LastPokemonBoard
                            list={lastWished}
                            tittle="Últimos pokémon desejados"
                            to="listadedesejos"
                            warningTittle="Nenhum shiny na lista..."
                            warningDescription="Que tal adicionar aqueles que você mais quer encontrar?"
                        />

                        <LastPokemonBoard
                            list={lastCatched}
                            tittle="Últimos pokémon capturados"
                            to="shinys"
                            warningTittle="Sua Pokébola está vazia!"
                            warningDescription="Capture seus shinies e veja eles aqui!"
                        />
                    </section>
                </section>
            </HiddenScrollBar>
        </section>
    );
}