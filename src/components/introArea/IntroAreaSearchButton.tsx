import { IoMdSearch } from "react-icons/io";
import { usePokedex } from "../../hooks/usePokedex";

export function IntroAreaSearchButton() {
    const { getSearchedPokemon } = usePokedex();

    return (
        <button
            className="flex items-center justify-center w-11 lg:w-10 h-full bg-primary hover:bg-indigo-800 shadow-sm rounded-lg"
            onClick={() => getSearchedPokemon()}
        >
            <IoMdSearch className="text-white text-2xl" />
        </button>
    )
}