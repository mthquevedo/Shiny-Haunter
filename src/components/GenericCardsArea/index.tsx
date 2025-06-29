import { useSelector } from "react-redux";
import { genericSubListProps } from "../../constants/pokemon.constants";
import { RootState } from "../../store";
import { GenericCard } from "../GenericCard";
import { HiddenScrollBar } from "../hiddenScrollBar";

interface GenericCardsAreaProps extends genericSubListProps {
    hasCatchButton?: boolean;
}

export function GenericCardsArea({ list, hasCatchButton }: GenericCardsAreaProps) {
    const { view } = useSelector((state: RootState) => state.userPreferences);

    return (
        <HiddenScrollBar>
            <div className="flex items-start justify-start w-full flex-wrap gap-x-[1.2rem] 2xl:gap-x-[1.25rem] gap-y-4 2xl:gap-y-8 pb-4 xl:pb-0 mb-2">
                {list.map(pokemon =>
                    <GenericCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        view={view}
                        hasCatchButton={hasCatchButton}
                    />
                )}
            </div >
        </HiddenScrollBar>
    );
}