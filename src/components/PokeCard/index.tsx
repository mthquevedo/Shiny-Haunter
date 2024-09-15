import { MdBookmarkAdd, MdCatchingPokemon } from "react-icons/md";
import { upperFirstLetter } from "../../utils/pokemon.utils";
import { TypeFlag } from "../TypeFlag";

interface PokeCardProps {
    id: number;
    region: string;
    name: string;
    thumbnail: string;
    firstType: string;
    secondType: string;
}

export function PokeCard({ id, name, region, thumbnail, firstType, secondType }: PokeCardProps) {

    return (
        <article className="flex flex-col item bg-white w-14v mt-3 p-3 rounded-2xl shadow-md">
            <section className="flex flex-col justify-center items-center bg-electricback w-full h-44 p-2 relative overflow-hidden rounded-xl">
                <p className="absolute top-1 left-2 select-all font-bold text-xl text-neutral-600 mix-blend-multiply">
                    #{id}
                </p>
                <div className="absolute top-1 right-2 flex flex-col gap-2">
                    <button className="flex justify-center items-center text-xl w-8 bg-neutral-300 rounded-lg p-1 hover:bg-red-500 hover:text-white transition">
                        <MdCatchingPokemon />
                    </button>
                    <button className="flex justify-center items-center text-xl w-8 bg-neutral-300 rounded-lg p-1 hover:bg-blue-500 hover:text-white transition">
                        <MdBookmarkAdd />
                    </button>
                </div>
                <img
                    src={thumbnail}
                    alt=""
                    className="w-48 mr-1 select-none"
                />
            </section>

            <footer className="flex flex-col justify-between items-start mt-3">
                <div className="flex gap-2">
                    <TypeFlag type={upperFirstLetter(firstType)} icon={firstType} flagColor={"bg-" + firstType} />
                    <TypeFlag type={upperFirstLetter(secondType)} icon={secondType} flagColor={"bg-" + secondType} />
                </div>

                <div className="flex justify-between items-center mt-2 w-full">
                    <div className="leading-3">
                        <p className="text-neutral-800 font-bold text-xl leading-6">{name}</p>
                        <p className="text-neutral-500 italic text-sm">{region}</p>
                    </div>
                </div>
            </footer>
        </article>
    );
}