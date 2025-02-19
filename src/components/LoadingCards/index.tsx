import { LIMIT_CARDS } from "../../constants/pokemon.constants"

export function LoadingCards() {
    const cards = Array(LIMIT_CARDS).fill(null);

    return (
        <div className="flex item-center justify-center flex-wrap gap-5">
            {cards.map((_, i) => (
                <div key={i} className="bg-slate-200 w-12v h-[17rem] mt-6 mb-0.5 rounded-2xl shadow-md overflow-hidden">
                    <div className="animate-pulse">
                        <div className="bg-slate-400/60 flex flex-col justify-center items-center w-full h-48 relative overflow-hidden rounded-xl">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}