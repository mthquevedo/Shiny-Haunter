import { ViewMode } from "../../constants/app.constants";
import { genericSubListItem } from "../../constants/pokemon.constants";
import { GenericCardGrid } from "./genericCardGrid";
import { GenericCardList } from "./genericCardList";

interface GenericCardProps {
    pokemon: genericSubListItem;
    view: ViewMode,
    hasCatchButton?: boolean;
}

export function GenericCard({ pokemon, view, hasCatchButton }: GenericCardProps) {
    const isGridView = view === ViewMode.GRID;

    return (
        <>
            {isGridView ?
                <GenericCardGrid
                    key={pokemon.id}
                    pokemon={pokemon}
                    hasCatchButton={hasCatchButton}
                />
                :
                <GenericCardList
                    key={pokemon.id}
                    pokemon={pokemon}
                    hasCatchButton={hasCatchButton}
                />
            }
        </>
    )
}