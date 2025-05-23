import { genericSubListItem } from "../../constants/pokemon.constants";
import { GenericCardGrid } from "./GenericCardGrid";
import { GenericCardList } from "./GenericCardList";

interface GenericCardProps {
    pokemon: genericSubListItem;
    view: "grid" | "list",
}

export function GenericCard({ pokemon, view }: GenericCardProps) {
    const isGridView = view === "grid";

    return (
        <>
            {isGridView ?
                <GenericCardGrid
                    key={pokemon.id}
                    pokemon={pokemon}
                />
                :
                <GenericCardList
                    key={pokemon.id}
                />
            }
        </>
    )
}