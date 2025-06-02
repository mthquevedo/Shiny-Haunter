import { ScrollArea } from "radix-ui";
import { useSelector } from "react-redux";
import { genericSubListProps } from "../../constants/pokemon.constants";
import { RootState } from "../../store";
import { GenericCard } from "../GenericCard";

interface GenericCardsAreaProps extends genericSubListProps {
    hasCatchButton?: boolean;
}

export function GenericCardsArea({ list, hasCatchButton }: GenericCardsAreaProps) {
    const { view } = useSelector((state: RootState) => state.userPreferences);

    return (
        <ScrollArea.Root className="w-full h-100v  max-h-full overflow-hidden">
            <ScrollArea.Viewport className="size-full">
                <div className="flex items-start justify-start mt-4 flex-wrap gap-x-[1.2rem] gap-y-4">
                    {list.map(pokemon =>
                        <GenericCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            view={view}
                            hasCatchButton={hasCatchButton}
                        />
                    )}
                </div >
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                className="flex touch-none select-none bg-neutral-300 p-0.5 transition-colors duration-[160ms] rounded-full ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col hover:bg-neutral-400"
                orientation="vertical"
            >
                <ScrollArea.Thumb className="relative flex-1 rounded-full bg-neutral-500 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-10 before:min-w-10 before:-translate-x-1/2 before:-translate-y-1/2" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-black" />
        </ScrollArea.Root>
    );
}