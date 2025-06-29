import { genericPokemon } from "../../constants/pokemon.constants";
import { cn } from "../../lib/cn";
import { bannerTypeColor, formatIdBelowTen } from "../../utils/pokemon.utils";
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
            className="flex flex-col bg-white w-[46%] x93:w-[47.03%] xsm:w-[47%] xsx:w-[47.64%] md:w-[31.1%] lg:w-[9.9rem] xl:w-[10.7rem] 2xl:w-[12.6rem] h-fit max-h-[12rem] xsm:max-h-[12.5rem] lg:h-fit rounded-lg overflow-hidden shadow-md"
        >
            <section
                className={cn("flex flex-col items-center justify-between min-h-fit max-h-[65%] pt-1 relative overflow-hidden", bannerTypeColor[pokemon.types[0].type.name])}
            >
                <header className="flex w-full items-center justify-between absolute top-1 px-2">
                    <TypeShelf types={pokemon.types} />

                    <DeleteButton name={pokemon.name} />
                </header>

                <img
                    src={pokemon.image}
                    alt={`Imagem do pokémon ${pokemon.name}`}
                    loading="lazy"
                    className="h-auto w-[70%] xsx:w-[55%] md:w-[59%] lg:w-[56%] xl:w-[55%] 2xl:w-[62%] lg:mt-2 xl:mt-0 lg:ml-2 2xl:ml-0 mt-2"
                />
            </section>

            <footer className="flex flex-col w-full items-center justify-between h-fit max-h-[35%] gap-1 md:gap-0.5 lg:gap-1 pt-1.5 pb-2 px-2">
                <div className="flex justify-between items-center text-sm md:text-lg lg:text-sm 2xl:text-base font-semibold w-full">
                    <h3 className="text-neutral-800">{pokemon.name}</h3>
                    <p className="select-all text-neutral-500">
                        #{formatIdBelowTen(pokemon.id)}
                    </p>
                </div>

                {hasCatchButton && <GenericCatchButton pokemon={pokemon} />}
            </footer>
        </article>
    )
}