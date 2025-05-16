import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LIMIT_CARDS } from "../../constants/pokemon.constants";
import { usePokedex } from "../../hooks/usePokedex";
import { RootState } from "../../store";
import { idValidation, nameValidation, typeValidation } from "../../utils/cardValidation";
import { LoadingCards } from "../LoadingCards";
import { PokeCard } from "../PokeCard";

export function PokeCardsArea() {
    const { loading, list } = useSelector((state: RootState) => state.pokedexList);
    const searchList = useSelector((state: RootState) => state.searchPokedex.searchList);
    const cardsQuantity = searchList.length === 0 ? LIMIT_CARDS : searchList.length;
    const { getPokemonPage } = usePokedex();

    useEffect(() => {
        if (list.length !== LIMIT_CARDS) {
            getPokemonPage();
        }
    }, []);

    return (
        <div className="w-full h-full flex items-start justify-start flex-wrap gap-6">
            {loading ?
                <LoadingCards quantity={cardsQuantity} />
                :
                <>
                    {list.map(pokemon => {
                        return (
                            <PokeCard
                                id={idValidation(pokemon.id)}
                                key={pokemon.id + pokemon.name}
                                name={nameValidation(pokemon.name)}
                                thumbnailDefault={pokemon.thumbnailDefault}
                                thumbnailShiny={pokemon.thumbnailShiny}
                                types={typeValidation(pokemon.types)}
                            />
                        )
                    })}
                </>
            }
        </div>
    )
}