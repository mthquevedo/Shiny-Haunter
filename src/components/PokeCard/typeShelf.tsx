import { PokemonType } from "pokenode-ts";
import { TypeFlag } from "../TypeFlag";

interface TypeShelfProps {
    types: PokemonType[];
}

export function TypeShelf({ types }: TypeShelfProps) {
    return (
        <div className="bg-white rounded-full p-1 flex items-center justify-center gap-1 shadow-md">
            {types.map(type => <TypeFlag type={type.type.name} />)}
        </div>
    );
}