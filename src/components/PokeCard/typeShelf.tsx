import { PokeCardProps } from "../../constants/pokemon.constants";
import { TypeFlag } from "../TypeFlag";


// interface TypeShelfProps {
//     types: PokemonType[];
// }

export function TypeShelf({ types }: PokeCardProps) {
    return (
        <div className="bg-white rounded-full p-1 flex items-center justify-center gap-1 shadow-md">
            {types?.map(type => <TypeFlag key={type.slot} type={type.type.name} />)}
        </div>
    );
}