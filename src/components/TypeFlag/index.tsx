import { twMerge } from "tailwind-merge";
import { pokemonTypes } from "../../utils/pokemon.utils";

interface TypeProps {
    type: keyof typeof pokemonTypes;
    flagColor: string;
}

export function TypeFlag({ type, flagColor }: TypeProps) {
    return (
        <div className={twMerge("flex items-center gap-1 px-2 py-1 rounded-full", flagColor)}>
            <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
                <pokemonTypes[type]/>
                {pokemonTypes?.[type] && <pokemonTypes.[type]/>}
            </span>
            <p className="text-sm font-medium">{type}</p>
        </div>
    );
}