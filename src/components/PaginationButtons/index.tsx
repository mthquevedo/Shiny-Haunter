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
                <div className="flex items-center justify-center w-full gap-5 lg:gap-[1rem]">
                    <button
                        onClick={() => previousPage()}
                        disabled={!previous}
                        className="w-[22%] xsm:w-[20%] md:w-[14%] lg:w-[9%] xl:w-[7%] 2xl:w-[6%] flex items-center justify-center bg-primary hover:bg-indigo-800 active:bg-indigo-950 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 lg:py-1.5 2xl:py-2 px-5 disabled:active:scale-100 active:scale-[0.98] duration-100 font-medium text-xs md:text-sm lg:text-[0.7rem] 2xl:text-sm shadow-md transition"
                    >
                        Voltar
                    </button>
                    <button
                        onClick={() => nextPage()}
                        disabled={!next}
                        className="w-[22%] xsm:w-[20%] md:w-[14%] lg:w-[9%] xl:w-[7%] 2xl:w-[6%] flex items-center justify-center bg-primary hover:bg-indigo-800 active:bg-indigo-950 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 lg:py-1.5 2xl:py-2 px-4 disabled:active:scale-100 active:scale-[0.98] duration-100 font-medium text-xs md:text-sm lg:text-[0.7rem] 2xl:text-sm shadow-md transition"
                    >
                        Avançar
                    </button>
                </div>
            }
        </>
    )
}