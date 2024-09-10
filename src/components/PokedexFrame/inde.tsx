import { PokeCard } from "../PokeCard";

export function PokedexFrame() {
    return (
        <section className="flex flex-col gap-1 w-full h-75v">
            <div>
                <p className="bg-slate-500 text-white">regiões...</p>
            </div>

            <PokeCard />

        </section>
    );
}