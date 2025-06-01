import { IoClose } from "react-icons/io5";
import { useWishList } from "../../hooks/useWishList";
import { CardTooltip } from "../Tooltips/CardTooltip";

interface DeleteButtoProps {
    name: string;
}

export function DeleteButton({ name }: DeleteButtoProps) {
    const { deleteItem } = useWishList();

    return (
        <CardTooltip content="Remover" side="top">
            <button
                className={"flex justify-center items-center bg-neutral-200 text-neutral-600 rounded-lg p-1 mr-1.5 transition active:scale-95 hover:bg-neutral-300 hover:shadow-sm "}
                onClick={() => deleteItem(name)}
            >
                <IoClose className="text-lg"/>
            </button>
        </CardTooltip>
    )
}