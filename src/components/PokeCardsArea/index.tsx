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
        <div className="w-full h-full flex items-start justify-start mt-4 flex-wrap gap-5">
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