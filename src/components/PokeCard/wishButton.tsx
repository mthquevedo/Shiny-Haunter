import { useSelector } from "react-redux";
import { genericSubListItem } from "../../constants/pokemon.constants";
import { useWishList } from "../../hooks/useWishList";
import { cn } from "../../lib/cn";
import { RootState } from "../../store";

const ACTIVE_BUTTON = "bg-neutral-400 active:bg-neutral-400 hover:bg-neutral-500 hover:text-white";

interface WishButtonProps {
    pokemon: genericSubListItem;
}

export function WishButton({ pokemon }: WishButtonProps) {
    const { handleWishItem } = useWishList();
    const isWished = useSelector((state: RootState) => state.wishlist.list)
        .some(item => item.name === pokemon.name);

    const handleToggleWishItem = () => {
        handleWishItem(pokemon)
    };

    return (
        <>
            <button
                className={cn("flex justify-center w-36 items-center text-xs text-white font-medium bg-blue-500 rounded-lg p-1 hover:bg-blue-400 hover:shadow-sm active:bg-blue-600 active:scale-[0.98] transition", { [ACTIVE_BUTTON]: isWished })}
                onClick={handleToggleWishItem}
            >
                {isWished ?
                    "Remover"
                    :
                    "Adicionar"
                }

            </button>
        </>
    );
}