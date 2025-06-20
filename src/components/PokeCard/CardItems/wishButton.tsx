import { useSelector } from "react-redux";
import { genericSubListItem } from "../../../constants/pokemon.constants";
import { useWishList } from "../../../hooks/useWishList";
import { cn } from "../../../lib/cn";
import { RootState } from "../../../store";

const ACTIVE_BUTTON = "bg-neutral-400 hover:bg-neutral-500 hover:text-white";

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
                className={cn("flex justify-center w-[5.5rem] x93:w-[6.3rem] xsm:w-[7.1rem] xsx:w-[8.7rem] md:w-[7.4rem] lg:w-[4.7rem] xl:w-[7rem] 2xl:w-full items-center text-xs lg:text-[0.625rem] 2xl:text-xs text-white font-medium bg-blue-500 rounded-lg p-1 xsm:py-1.5 lg:py-1 2xl:py-1.5 hover:bg-blue-400 md:hover:shadow-sm active:bg-blue-600 active:scale-[0.98] transition", { [ACTIVE_BUTTON]: isWished })}
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