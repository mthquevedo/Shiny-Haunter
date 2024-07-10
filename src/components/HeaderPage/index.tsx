import { IoLogoGithub } from "react-icons/io";

export function HeaderPage() {
    return (
        <div className="flex gap-4 items-center justify-end">
            <select name="idioma" className="text-primary bg-white text-xs font-medium pl-2 pr-4 py-1 w-32 h-9 rounded-lg
         border-primary border shadow focus:outline-none cursor-pointer">
                <option value="portugues" selected>Português</option>
            </select>

            <a href="https://github.com/mthquevedo/Shiny-Haunter" target="_blank" className="bg-darkgray hover:bg-stone-700 rounded-lg px-4 py-1 h-9 flex items-center justify-center gap-2 shadow">
                <p className="text-white text-xs font-medium">Envie seus feedbacks!</p>
                <IoLogoGithub className="fill-white w-6 h-6" />
            </a>
        </div>
    );
}