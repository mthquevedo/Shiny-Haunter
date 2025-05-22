import { useSelector } from "react-redux";
import { LIMIT_CARDS } from "../../constants/pokemon.constants";
import { usePagination } from "../../hooks/usePagination";
import { RootState } from "../../store";

export function PaginationButtons() {
    const { next, previous, list } = useSelector((state: RootState) => state.pokedexList);
    const { nextPage, previousPage } = usePagination();

    return (
        <>
            {list.length < LIMIT_CARDS ?
                <div></div>
                :
                <div className="flex gap-3 items-center justify-center">
                    <button
                        onClick={() => previousPage()}
                        disabled={!previous}
                        className="bg-primary hover:bg-indigo-700 active:bg-indigo-950 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-5 disabled:active:scale-100 active:scale-[0.98] duration-100 font-medium text-sm shadow-md transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => nextPage()}
                        disabled={!next}
                        className="bg-primary hover:bg-indigo-700 active:bg-indigo-950 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-4 disabled:active:scale-100 active:scale-[0.98] duration-100  font-medium text-sm shadow-md transition"
                    >
                        Próximo
                    </button>
                </div>
            }
        </>
    )
}