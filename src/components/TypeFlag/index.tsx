import { twMerge } from "tailwind-merge";
import { getPokemonTypeSVG } from "../../utils/pokemon.utils";

interface TypeProps {
    type: string;
    icon: string;
    flagColor: string;
}

export function TypeFlag({ type, flagColor, icon }: TypeProps) {
    return (
        <div className={twMerge("flex items-center gap-1 px-2 py-1 rounded-full", flagColor)}>
            <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
                <img src={getPokemonTypeSVG(icon)} alt="" className="w-5 h-5" />

            </span>
            <p className="text-sm font-medium">{type}</p>
        </div>
    );
}