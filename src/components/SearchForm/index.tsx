import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { Tooltip } from "react-tooltip"
interface SearchForm {
    formTitle: string;
    formDescription: string;
}

export function SearchForm({ formTitle, formDescription }: SearchForm) {
    const [search, setSearch] = useState<string>("");

    function clearSearch(event: React.FormEvent) {
        event.preventDefault();
        setSearch("");
    }

    return (
        <form
            className="flex items-end justify-between"
            onSubmit={clearSearch}
        >
            <div>
                <p className="text-xl font-bold text-primary">{formTitle}</p>
                <p className="text-darkgray">{formDescription}</p>
            </div>

            <div className="flex items-center justify-between gap-2 bg-white rounded-full w-fit py-1.5 px-5 border shadow">
                <div className="flex items-center gap-2">
                    <IoSearch className="fill-primary w-5 h-5" />
                    <input
                        className="text-sm w-20v h-6 placeholder:font-light placeholder:italic focus:outline-none"
                        spellCheck="false"
                        type="text"
                        placeholder="Busque pelo nome do pokémon"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <LuSettings2 className="w-5 h-5" />
                <button

                    type="submit"
                    className="font-medium text-lg pl-3 border-l text-neutral-500"
                >
                    <span
                        data-tooltip-id="toolApagar"
                        data-tooltip-content="Apagar"
                    >
                        X
                    </span>
                </button>
                <Tooltip
                    id="toolApagar"
                    style={{ padding: "0.3rem", fontSize: "0.8rem" }}
                    opacity={0.8}
                />
            </div>
        </form>
    );
}