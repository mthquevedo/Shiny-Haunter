import { IoLogoGithub } from "react-icons/io";

export function HomePage() {
    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col justify-between">
            <div className="flex gap-4 items-center justify-end">
                <select name="idioma" className="text-primary text-xs font-medium pl-2 pr-4 py-1 w-32 h-9 rounded-lg border-primary border shadow focus:outline-none cursor-pointer">
                    <option value="portugues" selected>Português</option>
                </select>

                <a href="https://github.com/mthquevedo/Shiny-Haunter" target="_blank" className="bg-neutral-900 rounded-lg px-4 py-1 h-9 flex items-center justify-center gap-2 shadow">
                    <p className="text-white text-xs font-medium">Envie seus feedbacks!</p>
                    <IoLogoGithub className="fill-white w-6 h-6" />
                </a>
            </div>

            <div className="flex items-center justify-between">
                <div className="w-35v">
                    <p className="text-primary font-bold text-5xl">Registre sua pokédex shiny e escolha os próximos pokémon para caçar em um só lugar!</p>

                    <button className="text-lg mt-6 bg-red-500 text-white px-4 py-1 rounded-full">
                        Comece agora
                    </button>
                </div>

                <div className="bg-zinc-400 w-30v h-56 flex items-center justify-center">
                    <p>Gerador de shiny aleatório</p>
                </div>
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