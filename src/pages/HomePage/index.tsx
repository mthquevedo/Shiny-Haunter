
import { Link } from "react-router-dom";
import { HeaderPage } from "../../components/HeaderPage";
import { FooterPage } from "../../components/FooterPage";
import { LastCatched } from "../../components/LastCatched";
import { LastWished } from "../../components/LastWished";

export function HomePage() {
    return (
        <section className="bg-gradient-to-tl from-backcolor to-white w-95v h-100v pt-11 pb-9 px-10 flex flex-1 flex-col justify-between">
            <HeaderPage />

            <div>
                <div className="bg-[url('src/assets/Home_banner_degrade.png')] bg-center bg-cover w-full h-35v rounded-lg flex flex-col
                justify-center truncate">
                    <div>
                        <p className="text-5xl leading-tight text-zinc-100 font-bold pl-6">Uma ferramenta para</p>
                        <p className="text-5xl leading-tight text-zinc-100 font-bold pl-6">todos os treinadores!</p>
                        <p className="text-xl leading-normal text-zinc-100 mt-3 pl-6">Registre seus shinies e escolha os</p>
                        <p className="text-xl leading-normal text-zinc-100 mb-7 pl-6">próximos para caçar em um só lugar!</p>

                        <Link
                            to="pokedex"
                            className="group text-lg bg-gradient-to-r from-buttoncyan to-indigo-500 from-30% px-4 py-2
                         text-white ml-6 rounded-lg shadow-lg transition-all ease-in-out hover:brightness-110 active:scale-95">
                            Comece agora!
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex gap-10 justify-between">
                <LastWished />

                <LastCatched />
            </div>

            <div>
                <p className="font-bold text-sm mb-3 text-darkgray">Notas de atualização</p>

                <div className="flex items-center justify-between gap-5">
                    <div className="bg-zinc-300 w-64 h-14 rounded-lg"></div>
                    <div className="bg-zinc-300 w-64 h-14 rounded-lg"></div>
                    <div className="bg-zinc-300 w-64 h-14 rounded-lg"></div>
                    <div className="bg-zinc-300 w-64 h-14 rounded-lg"></div>
                    <div className="bg-zinc-300 w-64 h-14 rounded-lg"></div>
                    <div className="bg-zinc-300 w-64 h-14 rounded-lg"></div>
                    <div className="bg-zinc-300 w-64 h-14 rounded-lg"></div>
                </div>
                <p className="text-xs font-medium mt-3">*Projeto sem fins lucratrivos.</p>
            </div>

            <FooterPage />
        </section>
    );
}