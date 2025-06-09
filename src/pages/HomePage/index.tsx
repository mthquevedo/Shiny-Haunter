
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LastPokemonBoard } from "../../components/LastPokemonBoard";
import { RootState } from "../../store";

export function HomePage() {
    const lastWished = useSelector((state: RootState) => state.wishlist.list).slice(-4);
    const lastCatched = useSelector((state: RootState) => state.catchlist.list).slice(-4);

    return (
        <section className="flex flex-col justify-start gap-3 xsm:gap-4 md:gap-8 lg:gap-6 2xl:gap-9 h-[88%] overflow-y-auto">
            <div className="flex flex-col justify-center gap-px xsm:gap-2 md:gap-5 lg:gap-3 2xl:gap-5 bg-[url('src/assets/Home_banner_degrade.png')] bg-left xl:bg-center bg-cover w-full h-[28%] min-h-fit xsm:h-[27%] md:h-[30%] lg:h-[48%] rounded-xl px-4 md:px-6 truncate shadow-md">
                <div className="text-xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-zinc-100 font-bold">
                    <p>Uma ferramenta para</p>
                    <p>todos os treinadores!</p>
                </div>
                <div className="flex flex-col items-start justify-between gap-1.5 xsm:gap-3 lg:gap-3 2xl:gap-4">
                    <div className="text-[0.625rem] xsm:text-sm md:text-lg xl:text-lg 2xl:text-xl text-zinc-100">
                        <p>Organize sua coleção e escolha os</p>
                        <p>próximos para caçar em um só lugar!</p>
                    </div>
                    <Link
                        to="pokedex"
                        className="text-[0.625rem] xsm:text-sm md:text-base 2xl:text-lg font-medium bg-gradient-to-r from-buttoncyan to-indigo-500 from-30% px-3 xsm:px-4 xl:px-5 py-1 xsm:py-1.5 xl:py-2 text-white rounded-lg shadow-md transition-all hover:brightness-110 active:scale-95 inline-block">
                        Comece agora!
                    </Link>
                </div>
            </div>

            <section className="flex flex-col 2xl:justify-between lg:flex-row gap-3 xsm:gap-4 md:gap-8 lg:gap-10 h-[56%]">
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
    );
}