import { cn } from "../../lib/cn";
import { getPokemonTypeSVG, typeColor } from "../../utils/pokemon.utils";

interface TypeProps {
    type: string;
}

export function TypeFlag({ type }: TypeProps) {
    return (
        <div className={cn("flex items-center gap-1 p-1 rounded-full", typeColor[type])}>
            <span className="w-4 h-4 rounded-full flex justify-center items-center">
                <img src={getPokemonTypeSVG(type)} alt="" className="w-3 h-auto" />
            </span>
        </div>
    );
}