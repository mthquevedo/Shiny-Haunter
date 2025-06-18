interface LoadingCardsProps {
    quantity: number;
}

export function LoadingCards({ quantity }: LoadingCardsProps) {
    const cards = Array(quantity).fill(null);

    return (
        <>
            {cards.map((_, i) => (
                <div key={i} className="2xl:flex bg-slate-200 w-[47.03%] xsm:w-[47%] xsx:w-[47.64%] md:w-[31.1%] lg:w-[14.7%] xl:w-[14.7%] 2xl:w-[15.21%] h-[10.3rem] xsm:h-[10.8rem] md:h-[12rem] lg:h-[9.2rem] 2xl:h-[30%] rounded-lg shadow-lg overflow-hidden relative">
                    <div className="animate-pulse">
                        <div className="bg-slate-400/60 w-full 2xl:w-[45%] h-[6.5rem] xsm:h-[6.8rem] md:h-[7.4rem] lg:h-[6rem] 2xl:h-full relative 2xl:absolute overflow-hidden">
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}