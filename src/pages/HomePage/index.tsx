
import { Link } from "react-router-dom";
import { HeaderPage } from "../../components/HeaderPage";
import { FooterPage } from "../../components/FooterPage";

export function HomePage() {
    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col justify-between">
            <HeaderPage />

            <div>
                <div className="bg-[url('src/assets/Home_banner_degrade.png')] bg-center bg-cover w-full h-35v rounded-lg flex flex-col
                justify-center truncate">
                    <div>
                        <p className="text-5xl text-zinc-100 font-bold pl-6">Uma ferramenta para</p>
                        <p className="text-5xl text-zinc-100 font-bold pl-6">todos os treinadores!</p>
                        <p className="text-xl text-zinc-100 mt-3 pl-6">Registre seus shinies e escolha os</p>
                        <p className="text-xl text-zinc-100 mb-4 pl-6">próximos para caçar em um só lugar!</p>

                        <Link to="pokedex" className="group text-lg bg-gradient-to-r from-buttoncyan to-indigo-500 from-30% px-4 py-1
                         text-white ml-6 rounded-lg shadow-lg transition-all ease-in-out hover:brightness-110">
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
                    <Link to="listadedesejos" className="text-xs font-bold text-primary text-right pt-1 hover:underline">
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
                    <Link to="shinys" className="text-xs font-bold text-primary text-right pt-1 hover:underline">
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

            <FooterPage />
        </section>
    );
}