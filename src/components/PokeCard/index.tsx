import { PokemonType } from "pokenode-ts";
import { useState } from "react";
import { MdCompare } from "react-icons/md";
import { cn } from "../../lib/cn";
import { bannerTypeColor } from "../../utils/pokemon.utils";
import { CardTooltip } from "../Tooltips/CardTooltip";
import { TypeShelf } from "./typeShelf";
import { WishButton } from "./wishButton";

interface PokeCardProps {
    id: number;
    name: string;
    thumbnailDefault: string;
    thumbnailShiny: string;
    types: PokemonType[];
}

export function PokeCard({ id, name, thumbnailDefault, thumbnailShiny, types }: PokeCardProps) {
    const [pokeImg, setPokeImg] = useState(thumbnailShiny);
    const [showDefault, setShowDefault] = useState(false);

    function handleImg() {
        setShowDefault(!showDefault)
        showDefault ? setPokeImg(thumbnailShiny) : setPokeImg(thumbnailDefault);
    }

    return (
        <article className="flex flex-col bg-white w-12v mt-2 rounded-2xl shadow-md overflow-hidden">
            <section className={cn("flex flex-col justify-center items-center w-full h-44 relative overflow-hidden rounded-xl", bannerTypeColor[types[0].type.name])}>

                <div className="absolute top-1 w-full px-2 flex items-center justify-between">

                    <TypeShelf types={types} />

                    <WishButton />
                </div>

                <img
                    src={pokeImg}
                    alt=""
                    className="h-auto w-40 mt-1 ml-2 select-none"
                />

            </section>

            <footer className="flex flex-col justify-between gap-2 px-3 pb-3">
                <div className="flex justify-between items-center text-lg mt-2 w-full">
                    <p className="text-neutral-800 font-bold leading-6">{name}</p>
                    <p className="select-all font-semibold text-neutral-500">
                        #{id}
                    </p>
                </div>
                <div className="flex justify-between">
                    <CardTooltip content="Comparar" side="top">
                        <button
                            onClick={handleImg}
                            className="flex justify-center items-center text-lg w-12 border-2 border-neutral-400 text-neutral-700 rounded-lg p-1 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-500 hover:shadow-sm active:bg-neutral-300 transition"
                        >
                            <MdCompare />
                        </button>
                    </CardTooltip>
                    <button
                        className="flex justify-center w-36 items-center text-xs text-white font-medium bg-blue-500 rounded-lg p-1 hover:bg-blue-400 hover:shadow-sm active:bg-blue-600 transition"
                    >
                        Adicionar
                    </button>
                </div>
            </footer>
        </article>
    );
}