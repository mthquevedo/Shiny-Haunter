import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

interface SearchForm {
    formTitle: string;
    formDescription: string;
}

export function SearchForm({ formTitle, formDescription }: SearchForm) {
    return (
        <form className="flex items-end justify-between">
            <div>
                <p className="text-xl font-bold text-primary">{formTitle}</p>
                <p className="text-darkgray">{formDescription}</p>
            </div>

            <div className="flex items-center justify-between gap-2 bg-white rounded-full w-fit py-1.5 px-5 border shadow">
                <div className="flex items-center gap-2">
                    <IoSearch className="fill-primary w-5 h-5" />
                    <input className="text-sm w-20v h-6 placeholder:font-light placeholder:italic focus:outline-none" spellCheck="false" type="text" placeholder="Busque pelo nome do pokémon" id="search" />
                </div>
                <LuSettings2 className="w-5 h-5" />
                <button className="font-medium text-lg pl-3 border-l text-neutral-500">X</button>
            </div>
        </form>
    );
}