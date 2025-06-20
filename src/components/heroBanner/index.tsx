import { Link } from "react-router-dom";

export function HeroBanner() {
    return (
        <div className="flex flex-col justify-center gap-px xsm:gap-2 md:gap-5 lg:gap-3 2xl:gap-5 bg-hero-banner bg-left xl:bg-center bg-cover w-full h-[9rem] xsm:h-[12rem] md:h-[18rem] lg:h-[16rem] 2xl:h-[20rem] rounded-xl px-4 md:px-6 truncate shadow-md">
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
    )
}