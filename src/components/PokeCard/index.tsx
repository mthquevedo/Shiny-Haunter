import { useState } from "react";
import { MdCompare } from "react-icons/md";
import { genericSubListItem, PokeProps } from "../../constants/pokemon.constants";
import { cn } from "../../lib/cn";
import { bannerTypeColor, formatIdBelowTen } from "../../utils/pokemon.utils";
import { CardTooltip } from "../Tooltips/CardTooltip";
import { CatchButton } from "./CardItems/catchButton";
import { TypeShelf } from "./CardItems/typeShelf";
import { WishButton } from "./CardItems/wishButton";

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
        <>
            {/* Telas com largura maior que 1536px */}
            <article
                key={id + "x"}
                className="hidden 2xl:flex items-center bg-white w-[15.21%] h-[30%] rounded-lg border border-neutral-200 shadow-lg overflow-hidden"
            >
                <section
                    className={cn("flex items-center justify-center relative w-[45%] h-full p-1", bannerTypeColor[types[0].type.name])}
                >
                    <div className="absolute top-1 left-2">
                        <TypeShelf types={types} />
                    </div>

                    <img
                        src={showDefault ? thumbnailDefault : thumbnailShiny}
                        alt={`Imagem do pokémon ${name}`}
                        loading="lazy"
                        className="w-full h-auto mt-1"
                    />
                </section>

                <section className="flex flex-col items-start justify-between w-[55%] h-full p-2">
                    <div className="flex items-center justify-between w-full">
                        <p className="font-semibold text-neutral-500">
                            #{formatIdBelowTen(id)}
                        </p>
                        <div className="flex gap-1.5 items-center">
                            <CardTooltip content="Comparar" side="top">
                                <button
                                    onClick={() => setShowDefault(!showDefault)}
                                    className="flex justify-center items-center rounded-lg p-1.5 text-neutral-700  bg-neutral-300 hover:bg-neutral-500 hover:text-white active:scale-95 transition"
                                >
                                    <MdCompare className="text-base" />
                                </button>
                            </CardTooltip>
                            <CatchButton pokemon={pokemonProfile} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 w-full">

                        <p className="text-neutral-800 font-bold text-[0.95rem]">{name}</p>

                        <WishButton pokemon={pokemonProfile} />
                    </div>
                </section>
            </article>

            {/* Telas com largura menor que 1536px */}
            <article key={id} className="flex 2xl:hidden flex-col bg-white w-[47.03%] xsm:w-[47%] xsx:w-[47.64%] md:w-[31.1%] lg:w-[14.7%] xl:w-[14.7%] h-[10.3rem] xsm:h-[10.8rem] md:h-[12rem] lg:h-[9.2rem] border border-neutral-200 rounded-lg shadow-lg overflow-hidden">
                <section className={cn("flex flex-col justify-center items-center w-full h-[6.5rem] xsm:h-[6.8rem] md:h-[7.4rem] lg:h-[6rem] 2xl:h-[7.6rem] relative overflow-hidden", bannerTypeColor[types[0].type.name])}>
                    <div className="flex items-center justify-between w-full absolute top-1.5 lg:top-1 px-2">
                        <TypeShelf types={types} />

                        <CatchButton pokemon={pokemonProfile} />
                    </div>

                    <img
                        src={showDefault ? thumbnailDefault : thumbnailShiny}
                        alt={`Imagem do pokémon ${name}`}
                        loading="lazy"
                        className="h-auto w-[60%] xsx:w-[55%] md:w-[60%] lg:w-[65%] xl:w-[55%] 2xl:w-[47%] lg:mt-2 xl:mt-0 lg:ml-2 2xl:ml-0 select-none transition-opacity duration-300"
                    />
                </section>

                <footer className="flex flex-col justify-between gap-1.5 xsm:gap-1 md:gap-1 px-2 md:px-3 lg:px-2 pb-1 md:pb-2 lg:pb-1.5 w-full">
                    <div className="flex justify-between items-center text-sm md:text-lg lg:text-xs 2xl:text-base mt-1">
                        <p className="text-neutral-800 font-bold">{name}</p>
                        <p className="select-all font-semibold text-neutral-500">
                            #{formatIdBelowTen(id)}
                        </p>
                    </div>
                    <div className="flex justify-between w-full">
                        <CardTooltip content="Comparar" side="top">
                            <button
                                onClick={() => setShowDefault(!showDefault)}
                                className="flex justify-center items-center bg-neutral-300 rounded-md shadow-sm p-1 w-8 md:w-10 lg:w-7 text-neutral-700 hover:bg-neutral-400 hover:text-neutral-800 hover:border-neutral-400 active:bg-neutral-400 transition"
                            >
                                <MdCompare className="text-[1rem] md:text-lg lg:text-sm" />
                            </button>
                        </CardTooltip>

                        <WishButton pokemon={pokemonProfile} />
                    </div>
                </footer>
            </article>
        </>
    );
}