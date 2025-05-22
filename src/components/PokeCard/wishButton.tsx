import { useSelector } from "react-redux";
import { genericSubListItem } from "../../constants/pokemon.constants";
import { useWishList } from "../../hooks/useWishList";
import { cn } from "../../lib/cn";
import { RootState } from "../../store";

const ACTIVE_BUTTON = "bg-neutral-400 active:bg-neutral-400 hover:bg-neutral-500 hover:text-white";

export function WishButton({ id, name, image, type }: genericSubListItem) {
    const { handleWishItem } = useWishList();
    const isWished = useSelector((state: RootState) => state.wishlist.list)
        .some(item => item.name === name);

    const pokemon: genericSubListItem = {
        id,
        name,
        image,
        type,
        date: new Date().toLocaleDateString('pt-BR'),
    }

    const handleToggle = () => {        
        handleWishItem(pokemon)
    };

    return (
        <>
            <button
                className={cn("flex justify-center w-36 items-center text-xs text-white font-medium bg-blue-500 rounded-lg p-1 hover:bg-blue-400 hover:shadow-sm active:bg-blue-600 active:scale-[0.98] transition", { [ACTIVE_BUTTON]: isWished })}
                onClick={handleToggle}
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