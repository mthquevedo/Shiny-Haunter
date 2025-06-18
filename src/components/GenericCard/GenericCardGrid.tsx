import { genericPokemon } from "../../constants/pokemon.constants";
import { cn } from "../../lib/cn";
import { bannerTypeColor } from "../../utils/pokemon.utils";
import { TypeShelf } from "../PokeCard/CardItems/typeShelf";
import { DeleteButton } from "./GenericButtons/deleteButton";
import { GenericCatchButton } from "./GenericButtons/genericCatchButton";

interface GenericCardGrid extends genericPokemon {
    hasCatchButton?: boolean;
}

export function GenericCardGrid({ pokemon, hasCatchButton }: GenericCardGrid) {    
    return (
        <article
            key={pokemon.id}
            className="flex flex-col bg-white w-[9.625rem] h-fit rounded-lg overflow-hidden shadow-md"
        >
            <section
                className={cn("flex flex-col items-center justify-between pt-1 relative overflow-hidden", bannerTypeColor[pokemon.types[0].type.name])}
            >
                <header className="flex w-full items-center justify-between absolute top-0.5">
                    <span className="scale-[0.8]">
                        <TypeShelf types={pokemon.types} />
                    </span>

                    <DeleteButton name={pokemon.name} />
                </header>

                <img
                    src={pokemon.image}
                    alt={`Imagem do pokémon ${pokemon.name}`}
                    loading="lazy"
                    className="w-28 mt-3 mb-0.5"
                />
            </section>

            <footer className="flex flex-col w-full items-start justify-center gap-1 py-1 px-2">
                <h3 className="font-medium text-neutral-700">{pokemon.name}</h3>

                {hasCatchButton && <GenericCatchButton pokemon={pokemon}/>}
            </footer>
        </article>
    )
}