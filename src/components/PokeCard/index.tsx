import { useState } from "react";
import { MdCompare } from "react-icons/md";
import { genericSubListItem, PokeProps } from "../../constants/pokemon.constants";
import { cn } from "../../lib/cn";
import { bannerTypeColor, formatIdBelowTen } from "../../utils/pokemon.utils";
import { CardTooltip } from "../Tooltips/CardTooltip";
import { CatchButton } from "./catchButton";
import { TypeShelf } from "./typeShelf";
import { WishButton } from "./wishButton";

export function PokeCard({ id, name, thumbnailDefault, thumbnailShiny, types }: PokeProps) {
    const [showDefault, setShowDefault] = useState(false);

    const pokemonProfile: genericSubListItem = {
        id,
        name,
        image: thumbnailShiny,
        types,
        date: new Date().toLocaleDateString('pt-BR'),
    }
    
    return (
        <article key={id} className="flex flex-col bg-white w-12v rounded-lg shadow-md overflow-hidden">
            <section className={cn("flex flex-col justify-center items-center w-full h-48 relative overflow-hidden", bannerTypeColor[types[0].type.name])}>
                <div className="absolute top-1 w-full px-2 flex items-center justify-between">
                    <TypeShelf types={types} />

                    <CatchButton pokemon={pokemonProfile} />
                </div>

                <img
                    src={showDefault ? thumbnailDefault : thumbnailShiny}
                    alt={`Imagem do pokémon ${name}`}
                    loading="lazy"
                    className="h-auto w-44 mt-1 ml-2 select-none transition-opacity duration-300"
                />
            </section>

            <footer className="flex flex-col justify-between gap-2 px-3 pb-3">
                <div className="flex justify-between items-center text-lg mt-2 w-full">
                    <p className="text-neutral-800 text-nowrap font-bold leading-6">{name}</p>
                    <p className="select-all font-semibold text-neutral-500">
                        #{formatIdBelowTen(id)}
                    </p>
                </div>
                <div className="flex justify-between">
                    <CardTooltip content="Comparar" side="top">
                        <button
                            onClick={() => setShowDefault(!showDefault)}
                            className="flex justify-center items-center text-lg w-12 border-2 border-neutral-400 text-neutral-700 rounded-lg p-1 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-500 hover:shadow-sm active:bg-neutral-300 transition"
                        >
                            <MdCompare />
                        </button>
                    </CardTooltip>

                    <WishButton pokemon={pokemonProfile} />
                </div>
            </footer>
        </article>
    );
}