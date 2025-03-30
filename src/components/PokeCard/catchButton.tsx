import { MdCatchingPokemon } from "react-icons/md";
import { useDispatch, useSelector, } from "react-redux";
import { cn } from "../../lib/cn";
import { RootState } from "../../store";
import { toggleCatchlist } from "../../store/reducers/catchlist";
import { CardTooltip } from "../Tooltips/CardTooltip";
import { PokeCardProps } from "../../constants/pokemon.constants";

const ACTIVE_BUTTON = "bg-red-500";

// interface CatchButtonProps {
//     pokeName: string;

// }

export function CatchButton({ name, thumbnailShiny }: PokeCardProps) {
    const pokeName = name ?? "";
    const dispatch = useDispatch();
    const catchlist = useSelector((state: RootState) => state.catchlist.catchlist);

    const isCatched = catchlist.some(item => item.name === pokeName);

    const handleToggle = () => {
        dispatch(toggleCatchlist({ name: pokeName, image: thumbnailShiny ?? "" }));
    };

    return (
        <>
            <CardTooltip content="Capturado" side="top">
                <button
                    className={cn("flex justify-center items-center text-xl bg-neutral-400 rounded-full shadow-sm p-1 hover:bg-red-500 active:bg-red-600 active:scale-95 text-white transition", { [ACTIVE_BUTTON]: isCatched })}
                    onClick={handleToggle}
                >
                    <MdCatchingPokemon />
                </button>
            </CardTooltip>
        </>
    );
}