import { genericPokemon } from "../../constants/pokemon.constants";
import { cn } from "../../lib/cn";
import { bannerTypeColor } from "../../utils/pokemon.utils";
import { CatchButton } from "../PokeCard/catchButton";
import { TypeShelf } from "../PokeCard/typeShelf";
import { DeleteButton } from "./deleteButton";

export function GenericCardGrid({ pokemon }: genericPokemon) {
    return (
        <article
            key={pokemon.id}
            className={cn("flex flex-col items-center border border-neutral-400 w-[9.625rem] h-22v rounded-lg py-2 px-2 overflow-hidden transition hover:border-neutral-500 hover:shadow-lg", bannerTypeColor[pokemon.type[0].type.name])}
        >
            <header className="flex w-full items-center justify-between">
                <CatchButton />

                <DeleteButton name={pokemon.name} />
            </header>

            <img
                src={pokemon.image}
                alt={`Imagem do pokémon ${pokemon.name}`}
                loading="lazy"
                className="w-24"
            />

            <footer className="flex flex-col gap-0 w-full items-center justify-center">
                <span className="scale-[0.8]">
                    <TypeShelf types={pokemon.type} />
                </span>
                <h3 className="font-medium m-0 p-0 text-neutral-700 mt-0.5">{pokemon.name}</h3>
            </footer>
        </article>
    )
}