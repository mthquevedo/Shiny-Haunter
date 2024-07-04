import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col gap-2 justify-between">
            <div className="flex gap-4 items-center justify-end">
                <select name="idioma" className="text-primary text-xs font-medium pl-2 pr-4 py-1 w-32 h-9 rounded-lg
                 border-primary border shadow focus:outline-none cursor-pointer">
                    <option value="portugues" selected>Português</option>
                </select>

                <a href="https://github.com/mthquevedo/Shiny-Haunter" target="_blank" className="bg-darkgray rounded-lg px-4 py-1 h-9 flex items-center justify-center gap-2 shadow">
                    <p className="text-white text-xs font-medium">Envie seus feedbacks!</p>
                    <IoLogoGithub className="fill-white w-6 h-6" />
                </a>
            </div>

            <div>
                <div className="bg-[url('src/assets/Home_banner_degrade.png')] bg-center bg-cover w-full h-35v rounded-lg flex flex-col
                justify-center truncate">
                    <div>
                        <p className="text-6xl text-zinc-100 font-bold pl-6">Uma ferramenta para</p>
                        <p className="text-6xl text-zinc-100 font-bold pl-6">todos os treinadores!</p>
                        <p className="text-2xl text-zinc-100 mt-3 pl-6">Registre seus shinys e escolha os</p>
                        <p className="text-2xl text-zinc-100 mb-3 pl-6">próximos para caçar em um só lugar!</p>

                        <Link to="pokemon/list" className="text-lg bg-buttoncyan px-4 py-1 text-white ml-6 rounded-lg shadow
                        hover:bg-buttoncyanhigh">
                            Comece agora!
                        </Link>
                    </div>
                </div>

                <p className="text-xs mt-1">*Esse é um projeto brasileiro e sem fins lucratrivos.</p>
            </div>

            <div>
                <p className="font-bold text-sm mb-3">Notas de atualização</p>

                <div className="flex items-center gap-5">
                    <div className="bg-zinc-400 w-60 h-11"></div>
                    <div className="bg-zinc-400 w-60 h-11"></div>
                    <div className="bg-zinc-400 w-60 h-11"></div>
                    <div className="bg-zinc-400 w-60 h-11"></div>
                    <div className="bg-zinc-400 w-60 h-11"></div>
                    <div className="bg-zinc-400 w-60 h-11"></div>
                    <div className="bg-zinc-400 w-60 h-11"></div>
                </div>
            </div>

            <div className="text-xs font-bold flex items-center justify-between">
                <p>2024 @Todos os direitos reservados - <a href="https://github.com/mthquevedo" target="_blank" className="text-blue-900">Matheus Quevedo</a></p>
                <p>Versão 1.0</p>
            </div>
        </section>
    );
}