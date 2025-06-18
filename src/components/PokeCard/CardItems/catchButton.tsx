import { MdCatchingPokemon } from "react-icons/md";
import { genericSubListItem } from "../../../constants/pokemon.constants";
import { useCatchList } from "../../../hooks/useCatchList";
import { cn } from "../../../lib/cn";
import { CardTooltip } from "../../Tooltips/CardTooltip";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ACTIVE_BUTTON = "bg-red-500 text-white";

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
        <CardTooltip content="Capturar" side="top">
            <button
                className={cn("flex justify-center items-center text-neutral-700 bg-neutral-300 rounded-lg shadow-sm p-1 2xl:p-1.5 hover:bg-red-500 hover:text-white active:bg-red-600 md:active:scale-95 transition", { [ACTIVE_BUTTON]: isCatched })}
                onClick={handleToggleCatchItem}
            >
                <MdCatchingPokemon className="text-[1.1rem] md:text-xl lg:text-sm 2xl:text-base" />
            </button>
        </CardTooltip>
    );
}