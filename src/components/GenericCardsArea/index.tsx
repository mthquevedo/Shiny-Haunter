import { genericSubListProps } from "../../constants/pokemon.constants";
import { GenericCard } from "../GenericCard";

export function GenericCardsArea({ list, view }: genericSubListProps) {
    return (
        <div className="w-full h-fit max-h-full flex items-start justify-start mt-4 flex-wrap gap-x-3 gap-y-2">
            {list.map(pokemon =>
                <GenericCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    view={view}
                />
            )}
        </div >
    );
}