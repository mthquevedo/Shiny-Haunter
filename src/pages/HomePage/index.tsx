
import { Link } from "react-router-dom";
import { LastCatched } from "../../components/LastCatched";
import { LastWished } from "../../components/LastWished";

export function HomePage() {
    return (
        <>
            <div className="bg-[url('src/assets/Home_banner_degrade.png')] bg-center bg-cover w-full h-35v rounded-xl flex flex-col justify-center px-6 truncate shadow-md">
                <div className="">
                    <p className="text-5xl leading-tight text-zinc-100 font-bold">Uma ferramenta para</p>
                    <p className="text-5xl leading-tight text-zinc-100 font-bold">todos os treinadores!</p>
                    <p className="text-xl leading-normal text-zinc-100 mt-3">Organize sua coleção e escolha os</p>
                    <p className="text-xl leading-normal text-zinc-100 mb-7">próximos para caçar em um só lugar!</p>

                    <Link
                        to="pokedex"
                        className="group font-medium bg-gradient-to-r from-buttoncyan to-indigo-500 from-30% px-5 py-2 text-white rounded-lg shadow-md transition-all hover:brightness-110 active:scale-95">
                        Comece agora!
                    </Link>
                </div>
            </div>

            <div className="flex gap-10 justify-between">
                <LastWished />

                <LastCatched />
            </div>

            <div>
                <p className="font-bold text-sm mb-3 text-darkgray">Notas de atualização</p>

                <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center justify-center bg-zinc-300 w-64 h-14 rounded-lg">Em construção</div>
                    <div className="flex items-center justify-center bg-zinc-300 w-64 h-14 rounded-lg">Em construção</div>
                    <div className="flex items-center justify-center bg-zinc-300 w-64 h-14 rounded-lg">Em construção</div>
                    <div className="flex items-center justify-center bg-zinc-300 w-64 h-14 rounded-lg">Em construção</div>
                    <div className="flex items-center justify-center bg-zinc-300 w-64 h-14 rounded-lg">Em construção</div>
                    <div className="flex items-center justify-center bg-zinc-300 w-64 h-14 rounded-lg">Em construção</div>
                    <div className="flex items-center justify-center bg-zinc-300 w-64 h-14 rounded-lg">Em construção</div>
                </div>
            </div>
        </>
    );
}