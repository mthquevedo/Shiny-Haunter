import { MdCatchingPokemon } from "react-icons/md";
import { useDispatch, useSelector, } from "react-redux";
import { cn } from "../../lib/cn";
import { RootState } from "../../store";
import { toggleCatchlist } from "../../store/reducers/catchlist";
import { CardTooltip } from "../Tooltips/CardTooltip";

const ACTIVE_BUTTON = "bg-red-500";

interface CatchButtonProps {
    pokeName: string;
}

export function CatchButton({ pokeName }: CatchButtonProps) {
    const dispatch = useDispatch();
    const catchlist = useSelector((state: RootState) => state.catchlist.catchlist);

    const isCatched = catchlist.includes(pokeName);

    const handleToggle = () => {
        dispatch(toggleCatchlist(pokeName));
    };
    return (
        <>
            <CardTooltip content="Capturado" side="top">
                <button
                    className={cn("flex justify-center items-center text-xl bg-neutral-400 rounded-full shadow-sm p-1 hover:bg-red-500 active:bg-red-600 text-white transition", { [ACTIVE_BUTTON]: isCatched })}
                    onClick={handleToggle}
                >
                    <MdCatchingPokemon />
                </button>
            </CardTooltip>
        </>
    );
}