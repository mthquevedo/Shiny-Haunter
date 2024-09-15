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
        <article
            className="flex flex-col bg-white w-15v mt-3 py-3 px-4 rounded-md shadow-md">
            <section className="flex flex-col justify-between bg-electricback w-full p-2">
                <div>
                    <p>#{id}</p>
                    <p>{region}</p>
                </div>

                <img src={thumbnail} alt="" className="" />

                <p>{name}</p>
            </section>

            <footer className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                    <TypeFlag type={upperFirstLetter(firstType)} icon={firstType} flagColor={"bg-" + firstType} />
                    <TypeFlag type={upperFirstLetter(secondType)} icon={secondType} flagColor={"bg-" + secondType} />
                </div>

                <button className="text-sm">
                    + Adicionar
                </button>
            </footer>
        </article>
    );
}