import { genericSubListProps } from "../../constants/pokemon.constants";
import { GenericCardGrid } from "../GenericCard/GenericCardGrid";
import { GenericCardList } from "../GenericCard/GenericCardList";

export function GenericCardsArea({ list, view }: genericSubListProps) {
    const isGridView = view === "grid";

    return (
        <div className="w-full h-fit max-h-full flex items-start justify-start mt-4 flex-wrap gap-x-1 gap-y-2">
            {list.map(pokemon => isGridView ?
                <GenericCardGrid key={pokemon.id} pokemon={pokemon} />
                :
                <GenericCardList key={pokemon.id} />

            )}
        </div >
    );
}