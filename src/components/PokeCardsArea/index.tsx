import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT_CARDS } from "../../constants/pokemon.constants";
import { usePokedex } from "../../hooks/usePokedex";
import { RootState } from "../../store";
import { setSearchList } from "../../store/reducers/searchPokedex";
import { LoadingCards } from "../LoadingCards";
import { PokeCard } from "../PokeCard";

export function PokeCardsArea() {
    const dispatch = useDispatch();
    const { loading, list } = useSelector((state: RootState) => state.pokedexList);
    const searchList = useSelector((state: RootState) => state.searchPokedex.searchList);
    const cardsQuantity = searchList.length === 0 ? LIMIT_CARDS : searchList.length;
    const { getPokemonPage } = usePokedex();

    useEffect(() => {
        if (list.length !== LIMIT_CARDS) {
            getPokemonPage();
            dispatch(setSearchList([]));
        }
    }, []);

    return (
        <div className="flex items-start justify-center flex-wrap w-full 2xl:h-[39rem] gap-5 lg:gap-x-[1.28rem] lg:gap-y-[1.1rem] xl:gap-x-[1.65rem] xl:gap-y-[1rem] 2xl:gap-y-[2rem] pb-4 xl:pb-5 overflow-hidden">
            {loading ?
                <LoadingCards quantity={cardsQuantity} />
                :
                <>
                    {list.map(pokemon => {
                        return (
                            <PokeCard
                                id={pokemon.id}
                                key={pokemon.key}
                                name={pokemon.name}
                                thumbnailDefault={pokemon.thumbnailDefault}
                                thumbnailShiny={pokemon.thumbnailShiny}
                                types={pokemon.types}
                            />
                        )
                    })}
                </>
            }
        </div>
    )
}