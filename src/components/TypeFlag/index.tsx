import { twMerge } from "tailwind-merge";
import { getPokemonTypeSVG } from "../../utils/pokemon.utils";

interface TypeProps {
    type: string;
    icon: string;
    flagColor: string;
}

export function TypeFlag({ type, flagColor, icon }: TypeProps) {
    return (
        <div className={twMerge("flex items-center w-[5.313rem] gap-1 px-1.5 py-1 rounded-full", flagColor)}>
            <span className="w-5 h-5 bg-white rounded-full flex justify-center items-center">
                <img src={getPokemonTypeSVG(icon)} alt="" className="w-4 h-4" />

            </span>
            <p className="text-xs font-medium">{type}</p>
        </div>
    );
}