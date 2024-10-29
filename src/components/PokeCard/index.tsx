import { MdCatchingPokemon, MdCompare } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { cn } from "../../lib/cn";
import { bannerTypeColor } from "../../utils/pokemon.utils";
import { TypeFlag } from "../TypeFlag";
import { useState } from "react";

interface PokeCardProps {
    id: number;
    name: string;
    thumbnailDefault: string;
    thumbnailShiny: string;
    firstType: string;
    secondType: string;
}

export function PokeCard({ id, name, thumbnailDefault, thumbnailShiny, firstType, secondType }: PokeCardProps) {
    const [pokeImg, setPokeImg] = useState(thumbnailShiny);
    const [showDefault, setShowDefault] = useState(false);

    function handleImg() {
        setShowDefault(!showDefault)
        showDefault ? setPokeImg(thumbnailShiny) : setPokeImg(thumbnailDefault);
    }

    return (
        <article className="flex flex-col item bg-white w-12v mt-3 rounded-2xl shadow-md overflow-hidden">
            <section className={cn("flex flex-col justify-center items-center w-full h-44 relative overflow-hidden rounded-xl", bannerTypeColor[firstType])}>

                <div className="absolute top-2 w-full px-2 flex items-center justify-between">
                    <div className="bg-white rounded-full p-1 flex items-center justify-center gap-2 shadow-md">
                        <TypeFlag type={firstType} />
                        {secondType ? <TypeFlag type={secondType} /> : ""}
                    </div>
                    <button
                        className="flex justify-center items-center text-xl bg-neutral-400 rounded-full shadow-sm p-1 hover:bg-red-500 active:bg-red-600 text-white transition"
                        data-tooltip-id="toolCapturado"
                        data-tooltip-content="Capturado"
                    >
                        <MdCatchingPokemon />
                    </button>
                    {/* <Tooltip
                        id="toolCapturado"
                        style={{ padding: "0.3rem", fontSize: "0.8rem" }}
                        opacity={0.8}
                        place="top"
                    /> */}
                </div>

                <img
                    src={pokeImg}
                    alt=""
                    className="h-auto w-40 mt-1 select-none"
                />

            </section>

            <footer className="flex flex-col justify-between gap-1 px-3 pb-3">
                <div className="flex justify-between items-center text-lg mt-2 w-full">
                    <p className="text-neutral-800 font-bold leading-6">{name}</p>
                    <p className="select-all font-semibold text-neutral-500">
                        #{id}
                    </p>
                </div>
                <div className="flex justify-between">
                    <button
                        onClick={handleImg}
                        className="flex justify-center items-center text-lg w-12 border-2 border-neutral-400 text-neutral-700 rounded-lg p-1 hover:bg-neutral-200 hover:text-neutral-600 hover:shadow-sm active:bg-neutral-300 transition">
                        <MdCompare />
                    </button>
                    <button className="flex justify-center w-36 items-center text-xs text-white font-medium bg-blue-500 rounded-lg p-1 hover:bg-blue-400 hover:shadow-sm active:bg-blue-600 transition">
                        Adicionar
                    </button>
                </div>
            </footer>
        </article>
    );
}