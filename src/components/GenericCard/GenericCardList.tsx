import { genericPokemon } from "../../constants/pokemon.constants";
import { cn } from "../../lib/cn";
import { bannerTypeColor } from "../../utils/pokemon.utils";
import { TypeShelf } from "../PokeCard/CardItems/typeShelf";
import { DeleteButton } from "./GenericButtons/deleteButton";
import { GenericCatchButton } from "./GenericButtons/genericCatchButton";

interface GenericCardListProps extends genericPokemon {
    hasCatchButton?: boolean;
}

export function GenericCardList({ pokemon, hasCatchButton }: GenericCardListProps) {
    return (
        <article
            key={pokemon.id}
            className="flex items-center bg-white w-[24%] h-32 rounded-lg overflow-hidden shadow-md"
        >
            <section
                className={cn("flex items-center justify-center w-[35%] h-full p-3 rounded-lg", bannerTypeColor[pokemon.types[0].type.name])}
            >
                <img
                    src={pokemon.image}
                    alt={`Imagem do pokémon ${pokemon.name}`}
                    loading="lazy"
                    className="w-full h-auto"
                />
            </section>

            <section className="flex flex-col items-start justify-between w-[65%] h-full p-3">
                <div className="flex items-center justify-between w-full h-fit">
                    <p className="font-semibold text-neutral-500">#{pokemon.id}</p>
                    <span className="-mr-1.5">
                        <DeleteButton name={pokemon.name} />
                    </span>
                </div>

                <p className="text-xl font-semibold text-neutral-700">{pokemon.name}</p>

                <div className="flex items-center justify-between w-full h-fit">
                    <span className="scale-[0.9] -ml-1">
                        <TypeShelf types={pokemon.types} />
                    </span>
                    <span className="w-[60%] -mb-1.5">
                        {hasCatchButton && <GenericCatchButton pokemon={pokemon} />}
                    </span>
                </div>
            </section>
        </article>
    )
}