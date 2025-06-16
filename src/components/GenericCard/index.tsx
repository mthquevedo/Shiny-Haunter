import { genericSubListItem } from "../../constants/pokemon.constants";
import { GenericCardGrid } from "./GenericCardGrid";
import { GenericCardList } from "./GenericCardList";

interface GenericCardProps {
    pokemon: genericSubListItem;
    view: "grid" | "list",
    hasCatchButton?: boolean;
}

export function GenericCard({ pokemon, view, hasCatchButton }: GenericCardProps) {
    const isGridView = view === "grid";

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