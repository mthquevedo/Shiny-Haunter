import { MdCatchingPokemon } from "react-icons/md";
import { genericSubListItem } from "../../constants/pokemon.constants";
import { useCatchList } from "../../hooks/useCatchList";
import { cn } from "../../lib/cn";
import { CardTooltip } from "../Tooltips/CardTooltip";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ACTIVE_BUTTON = "bg-red-500";

interface CatchButtonProps {
    pokemon: genericSubListItem;
}

export function CatchButton({ pokemon }: CatchButtonProps) {
    const { handleCatchItem } = useCatchList();
    const isCatched = useSelector((state: RootState) => state.catchlist.list)
        .some(item => item.name === pokemon.name);

    const handleToggleCatchItem = () => {
        handleCatchItem(pokemon);
    };

    return (
        <>
            <CardTooltip content="Capturado" side="top">
                <button
                    className={cn("flex justify-center items-center text-xl bg-neutral-500 rounded-lg shadow-sm p-1 hover:bg-red-500 active:bg-red-600 active:scale-95 text-white transition", { [ACTIVE_BUTTON]: isCatched })}
                    onClick={handleToggleCatchItem}
                >
                    <MdCatchingPokemon />
                </button>
            </CardTooltip>
        </>
    );
}