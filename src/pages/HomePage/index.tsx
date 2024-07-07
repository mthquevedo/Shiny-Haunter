import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col justify-between">
            <div className="flex gap-4 items-center justify-end">
                <select name="idioma" className="text-primary bg-white text-xs font-medium pl-2 pr-4 py-1 w-32 h-9 rounded-lg
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
                        <p className="text-5xl text-zinc-100 font-bold pl-6">Uma ferramenta para</p>
                        <p className="text-5xl text-zinc-100 font-bold pl-6">todos os treinadores!</p>
                        <p className="text-xl text-zinc-100 mt-3 pl-6">Registre seus shinys e escolha os</p>
                        <p className="text-xl text-zinc-100 mb-4 pl-6">próximos para caçar em um só lugar!</p>

                        <Link to="pokedex" className="text-lg bg-buttoncyan px-4 py-1 text-white ml-6 rounded-lg shadow
                        hover:bg-buttoncyanhigh">
                            Comece agora!
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex gap-12 justify-between">
                <div className="bg-white w-40v h-fit min-h-52 px-5 py-3 rounded-lg shadow">
                    <p className="font-medium text-darkgray">Adicionados recentemente a lista de desejos</p>
                    <div className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
                        <div className="flex gap-4 items-center">
                            <img src="src/assets/rayquaza.jpg" alt="Foto de pokémon" className="w-12 h-12" />
                            <p>Rayquaza</p>
                        </div>

                        <p>01/07/2024</p>
                    </div>
                    <div className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
                        <div className="flex gap-4 items-center">
                            <img src="src/assets/rayquaza.jpg" alt="Foto de pokémon" className="w-12 h-12" />
                            <p>Rayquaza</p>
                        </div>

                        <p>01/07/2024</p>
                    </div>
                    <div className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
                        <div className="flex gap-4 items-center">
                            <img src="src/assets/rayquaza.jpg" alt="Foto de pokémon" className="w-12 h-12" />
                            <p>Rayquaza</p>
                        </div>

                        <p>01/07/2024</p>
                    </div>
                    <Link to="listadedesejos" className="text-xs font-bold text-primary text-right pt-1">
                        <p>Ver lista completa</p>
                    </Link>
                </div>

                <div className="bg-white w-40v h-fit min-h-52 px-5 py-3 rounded-lg shadow">
                    <p className="font-medium text-darkgray">Últimos pokémon capturados</p>
                    <div className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
                        <div className="flex gap-4 items-center">
                            <img src="src/assets/rayquaza.jpg" alt="Foto de pokémon" className="w-12 h-12" />
                            <p>Rayquaza</p>
                        </div>

                        <p>01/07/2024</p>
                    </div>
                    <div className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
                        <div className="flex gap-4 items-center">
                            <img src="src/assets/rayquaza.jpg" alt="Foto de pokémon" className="w-12 h-12" />
                            <p>Rayquaza</p>
                        </div>

                        <p>01/07/2024</p>
                    </div>
                    <div className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
                        <div className="flex gap-4 items-center">
                            <img src="src/assets/rayquaza.jpg" alt="Foto de pokémon" className="w-12 h-12" />
                            <p>Rayquaza</p>
                        </div>

                        <p>01/07/2024</p>
                    </div>
                    <Link to="shinys" className="text-xs font-bold text-primary text-right pt-1">
                        <p>Ver lista completa</p>
                    </Link>
                </div>
            </div>

            <div>
                <p className="font-bold text-sm mb-2 text-darkgray">Notas de atualização</p>

                <div className="flex items-center gap-5">
                    <div className="bg-zinc-300 w-60 h-12"></div>
                    <div className="bg-zinc-300 w-60 h-12"></div>
                    <div className="bg-zinc-300 w-60 h-12"></div>
                    <div className="bg-zinc-300 w-60 h-12"></div>
                    <div className="bg-zinc-300 w-60 h-12"></div>
                    <div className="bg-zinc-300 w-60 h-12"></div>
                </div>
                <p className="text-xs mt-2">*Esse é um projeto brasileiro e sem fins lucratrivos.</p>
            </div>

            <div className="text-xs flex items-center justify-between text-darkgray">

                <p className="font-bold">2024 @Todos os direitos reservados - <a href="https://github.com/mthquevedo" target="_blank" className="text-blue-900">Matheus Quevedo</a></p>
                <p className="font-medium">Versão 1.0</p>
            </div>
        </section>
    );
}