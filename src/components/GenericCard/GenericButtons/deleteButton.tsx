import { IoClose } from "react-icons/io5";
import { useWishList } from "../../../hooks/useWishList";
import { CardTooltip } from "../../Tooltips/CardTooltip";
import { useMatch } from "react-router-dom";
import { useCatchList } from "../../../hooks/useCatchList";

interface DeleteButtoProps {
    name: string;
}

export function DeleteButton({ name }: DeleteButtoProps) {
    const WishDelete = useWishList().deleteItem;
    const CatchDelete = useCatchList().deleteItem;
    const wishListUrl = useMatch("/listadedesejos");
    const CatchListUrl = useMatch("/shinys");
    
    const handleDelete = (name: string) => {
        if (wishListUrl) {
            WishDelete(name)
        } else if (CatchListUrl) {
            CatchDelete(name)
        }
    };

    return (
        <CardTooltip content="Remover" side="top">
            <button
                className={"flex justify-center items-center bg-neutral-300 text-neutral-600 rounded-lg p-0.5 mr-1.5 transition active:scale-95 hover:bg-neutral-200 hover:shadow-sm "}
                onClick={() => handleDelete(name)}
            >
                <IoClose className="text-lg" />
            </button>
        </CardTooltip>
    )
}