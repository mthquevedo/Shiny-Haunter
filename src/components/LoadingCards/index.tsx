interface LoadingCardsProps {
    quantity: number;
}

export function LoadingCards({ quantity }: LoadingCardsProps) {
    const cards = Array(quantity).fill(null);

    return (
        <>
            {cards.map((_, i) => (
                <div key={i} className="bg-slate-200 w-12v h-[17rem] mt-6 mb-0.5 rounded-2xl shadow-md overflow-hidden">
                    <div className="animate-pulse">
                        <div className="bg-slate-400/60 flex flex-col justify-center items-center w-full h-48 relative overflow-hidden rounded-xl">
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}