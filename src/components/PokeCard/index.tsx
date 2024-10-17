import { MdBookmarkAdd, MdCatchingPokemon } from "react-icons/md";
import { cn } from "../../lib/cn";
import { TypeFlag } from "../TypeFlag";
import { bannerTypeColor } from "../../utils/pokemon.utils";
import { Tooltip } from "react-tooltip"

interface PokeCardProps {
    id: number;
    name: string;
    thumbnail: string;
    firstType: string;
    secondType: string;
}

export function PokeCard({ id, name, thumbnail, firstType, secondType }: PokeCardProps) {
    return (
        <article className="flex flex-col item bg-white w-14v mt-3 p-3 rounded-2xl shadow-md">
            <section className={cn("flex flex-col justify-center items-center w-full h-44 p-4 relative overflow-hidden rounded-xl", bannerTypeColor[firstType])}>
                <p className="absolute top-1 left-2 select-all font-bold text-xl text-neutral-600 mix-blend-multiply">
                    #{id}
                </p>
                <div className="absolute top-1 right-2 flex flex-col gap-2">
                    <button
                        className="flex justify-center items-center text-xl w-8 bg-neutral-300 rounded-lg p-1 hover:bg-red-500 hover:text-white transition"
                        data-tooltip-id="toolCapturado"
                        data-tooltip-content="Capturado"
                    >
                        <MdCatchingPokemon />
                    </button>
                    <Tooltip
                        id="toolCapturado"
                        style={{ padding: "0.3rem", fontSize: "0.8rem" }}
                        opacity={0.8}
                        place="top"
                    />
                    <button className="flex justify-center items-center text-xl w-8 bg-neutral-300 rounded-lg p-1 hover:bg-blue-500 hover:text-white transition">
                        <MdBookmarkAdd />
                    </button>
                </div>
                <img
                    src={thumbnail}
                    alt=""
                    className="h-44 w-auto mr-1 select-none"
                />
            </section>

            <footer className="flex flex-col justify-between items-start mt-3">
                <div className="flex gap-2">
                    <TypeFlag type={firstType} />
                    <TypeFlag type={secondType} />
                </div>

                <div className="flex justify-between items-center mt-2 w-full">
                    <div className="leading-3">
                        <p className="text-neutral-800 font-bold text-xl leading-6">{name}</p>
                    </div>
                </div>
            </footer>
        </article>
    );
}