import { IoMdMoon, IoLogoGithub } from "react-icons/io";

export function HomePage() {
    return (
        <section className="bg-zinc-300 w-85v h-100v py-5 pl-10 pr-10 flex flex-col">
            <div className="flex gap-5 items-center justify-end">
                <div className="bg-neutral-900 rounded-full w-60 h-8 flex items-center justify-center gap-1">
                    <p className="text-white text-sm">Sugestões? Envie aqui</p>
                    <IoLogoGithub className="fill-white w-6 h-6" />
                </div>
                <div className="bg-primary w-8 h-8 flex items-center justify-center rounded-full">
                    <IoMdMoon className="fill-yellow-400 w-5 h-5" />
                </div>
            </div>
        </section>
    );
}