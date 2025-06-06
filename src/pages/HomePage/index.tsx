
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LastPokemonBoard } from "../../components/LastPokemonBoard";
import { RootState } from "../../store";

export function HomePage() {
    const lastWished = useSelector((state: RootState) => state.wishlist.list).slice(-3);
    const lastCatched = useSelector((state: RootState) => state.catchlist.list).slice(-3);

    return (
        <section className="flex flex-col justify-between gap-4 md:gap-1 lg:gap-10 h-[88%]">
            <div className="flex flex-col justify-center gap-3 md:gap-5 bg-[url('src/assets/Home_banner_degrade.png')] bg-left xl:bg-center bg-cover w-full h-[28%] xsm:h-[27%] md:h-[30%] lg:h-35v rounded-xl px-4 md:px-6 truncate shadow-md">
                <div className="text-xl md:text-3xl lg:text-5xl xl:text-4xl text-zinc-100 font-bold ">
                    <p>Uma ferramenta para</p>
                    <p>todos os treinadores!</p>
                </div>
                <div className="flex flex-col items-start justify-between gap-3 xsm:gap-4">
                    <div className="text-xs xsm:text-sm md:text-lg lg:text-xl xl:text-lg text-zinc-100">
                        <p>Organize sua coleção e escolha os</p>
                        <p>próximos para caçar em um só lugar!</p>
                    </div>
                    <Link
                        to="pokedex"
                        className="text-xs xsm:text-sm md:text-base lg:text-lg xl:text-base font-medium bg-gradient-to-r from-buttoncyan to-indigo-500 from-30% px-4 lg:px-5 py-1.5 lg:py-2 text-white rounded-lg shadow-md transition-all hover:brightness-110 active:scale-95 inline-block">
                        Comece agora!
                    </Link>
                </div>
            </div>

            <section className="flex flex-col lg:flex-row gap-6 md:gap-9 lg:gap-10 h-[56%]">
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

            <section className="h-[10%] md:h-[7%] flex flex-col justify-end">
                <p className="font-medium text-xs xl:text-sm mb-2 md:mb-3 text-neutral-800">Notas de atualização</p>

                <div className="flex items-center justify-between gap-5 text-[0.6rem] lg:text-base overflow-hidden">
                    <div className="flex items-center justify-center bg-zinc-300 min-w-fit w-64 h-8 px-3 lg:h-9 rounded-lg">Em breve</div>
                    <div className="flex items-center justify-center bg-zinc-300 min-w-fit w-64 h-8 px-3 lg:h-9 rounded-lg">Em breve</div>
                    <div className="flex items-center justify-center bg-zinc-300 min-w-fit w-64 h-8 px-3 lg:h-9 rounded-lg">Em breve</div>
                    <div className="flex items-center justify-center bg-zinc-300 min-w-fit w-64 h-8 px-3 lg:h-9 rounded-lg">Em breve</div>
                    <div className="flex items-center justify-center bg-zinc-300 min-w-fit w-64 h-8 px-3 lg:h-9 rounded-lg">Em breve</div>
                    <div className="flex items-center justify-center bg-zinc-300 min-w-fit w-64 h-8 px-3 lg:h-9 rounded-lg">Em breve</div>
                    <div className="flex items-center justify-center bg-zinc-300 min-w-fit w-64 h-8 px-3 lg:h-9 rounded-lg">Em breve</div>
                </div>
            </section>
        </section>
    );
}