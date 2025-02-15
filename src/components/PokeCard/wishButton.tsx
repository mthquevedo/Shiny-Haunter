import { MdCatchingPokemon } from "react-icons/md";
import { useDispatch, useSelector, } from "react-redux";
import { cn } from "../../lib/cn";
import { RootState } from "../../store";
import { toggleWishlist } from "../../store/reducers/wishlist";
import { CardTooltip } from "../Tooltips/CardTooltip";

const ACTIVE_BUTTON = "bg-red-500";

interface WishButtonProps {
    pokeName: string;
}

export function WishButton({ pokeName }: WishButtonProps) {
    const dispatch = useDispatch();
    const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);

    const isWished = wishlist.includes(pokeName);

    const handleToggle = () => {
        dispatch(toggleWishlist(pokeName));
    };
    return (
        <>
            <CardTooltip content="Capturado" side="top">
                <button
                    className={cn("flex justify-center items-center text-xl bg-neutral-400 rounded-full shadow-sm p-1 hover:bg-red-500 active:bg-red-600 text-white transition", { [ACTIVE_BUTTON]: isWished })}
                    onClick={handleToggle}
                >
                    <MdCatchingPokemon />
                </button>
            </CardTooltip>
        </>
    );
}