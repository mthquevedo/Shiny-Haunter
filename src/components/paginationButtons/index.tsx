import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { handleNextPage, handlePreviousPage } from "../../store/reducers/pokedexList";
import { LIMIT_CARDS } from "../../constants/pokemon.constants";

export function PaginationButtons() {
    const dispatch = useDispatch();
    const { next, previous, list } = useSelector((state: RootState) => state.pokedexList);

    return (
        <>
            {list.length < LIMIT_CARDS ?
                <div></div>
                :
                <div className="flex gap-4 items-center justify-center">
                    <button
                        onClick={() => dispatch(handlePreviousPage())}
                        disabled={!previous}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-5 disabled:active:scale-100 active:scale-[0.98] font-medium text-sm shadow-md transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => dispatch(handleNextPage())}
                        disabled={!next}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-4 disabled:active:scale-100 active:scale-[0.98] font-medium text-sm shadow-md transition"
                    >
                        Próximo
                    </button>
                </div>
            }
        </>
    )
}