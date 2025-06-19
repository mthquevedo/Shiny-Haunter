import { genericSubListItem } from "../../../constants/pokemon.constants";
import { useCatchList } from "../../../hooks/useCatchList";
import { useWishList } from "../../../hooks/useWishList";

interface GenericCatchButtonProps {
    pokemon: genericSubListItem;
}

export function GenericCatchButton({ pokemon }: GenericCatchButtonProps) {
    const { handleCatchItem } = useCatchList();
    const { deleteItem } = useWishList();

    const handleToggleCatchItem = () => {
        handleCatchItem(pokemon);
        deleteItem(pokemon.name);
    };

    return (
        <button
            className="flex items-center justify-center w-full  bg-blue-500 rounded-lg py-1.5 px-1 hover:bg-blue-400 hover:shadow-sm active:bg-blue-600 active:scale-[0.98] transition"
            onClick={() => handleToggleCatchItem()}
        >
            <p className="text-xs text-white font-medium">Capturar</p>
        </button>
    )
}