import { LuTrash2 } from "react-icons/lu";
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
                className={"flex justify-center items-center text-xl bg-neutral-400 rounded-full shadow-sm p-1 hover:bg-red-500 active:bg-red-600 active:scale-95 text-white transition"}
                onClick={() => deleteItem(name)}
            >
                <LuTrash2 className="" />
            </button>
        </CardTooltip>
    )
}