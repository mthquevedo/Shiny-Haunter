import { CardTooltip } from "../Tooltips/CardTooltip";
import { MdCatchingPokemon } from "react-icons/md";

export function WishButton() {
    return (
        <>
            <CardTooltip content="Capturado" side="top">
                <button
                    className="flex justify-center items-center text-xl bg-neutral-400 rounded-full shadow-sm p-1 hover:bg-red-500 active:bg-red-600 text-white transition"
                >
                    <MdCatchingPokemon />
                </button>
            </CardTooltip>
        </>
    );
}