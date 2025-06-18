import { cn } from "../../lib/cn";
import { getPokemonTypeSVG, typeColor } from "../../utils/pokemon.utils";

interface TypeProps {
    type: string;
}

export function TypeFlag({ type }: TypeProps) {
    return (
        <div className={cn("flex items-center justify-center p-1 rounded-full size-[1.2rem] xsm:size-[1.2rem] xsx:size-[1.3rem] md:size-6 lg:size-[1rem] 2xl:size-[1.2rem] ", typeColor[type])}>
            <img src={getPokemonTypeSVG(type)} alt="" className="w-[95%] h-auto" />
        </div>
    );
}