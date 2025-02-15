import { useDispatch, useSelector, } from "react-redux";
import { cn } from "../../lib/cn";
import { RootState } from "../../store";
import { toggleWishlist } from "../../store/reducers/wishlist";

const ACTIVE_BUTTON = "bg-neutral-400 hover:bg-red-500 hover:text-white";

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
            <button
                className={cn("flex justify-center w-36 items-center text-xs text-white font-medium bg-blue-500 rounded-lg p-1 hover:bg-blue-400 hover:shadow-sm active:bg-blue-600 transition", { [ACTIVE_BUTTON]: isWished })}
                onClick={handleToggle}
            >
                {(isWished) ?
                    "Remover"
                    :
                    "Adicionar"
                }

            </button>
        </>
    )
}