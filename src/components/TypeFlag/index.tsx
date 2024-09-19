import { cn } from "../../lib/cn";
import { getPokemonTypeSVG, typeColor, upperFirstLetter } from "../../utils/pokemon.utils";

interface TypeProps {
    type: string;
}

export function TypeFlag({ type }: TypeProps) {
    return (
        <div className={cn("flex items-center w-[5.313rem] gap-1 px-1.5 py-1 rounded-full", typeColor[type])}>
            <span className="w-5 h-5 bg-white rounded-full flex justify-center items-center">
                <img src={getPokemonTypeSVG(type)} alt="" className="w-4 h-4" />

            </span>
            <p className="text-xs font-medium">{upperFirstLetter(type)}</p>
        </div>
    );
}