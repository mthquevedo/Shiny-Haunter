import { PokeCard } from "../PokeCard";

export function PokedexFrame() {
    return (
        <section className="flex flex-col gap-1 w-full h-75v">
            <div>
                <p className="bg-slate-500 text-white p-1">regiões...</p>
            </div>
            <div className="flex gap-4">
                <PokeCard
                    id={999}
                    name="Miraidon"
                    region="Paldea"
                    thumbnail="./src/assets/1008.png"
                    firstType="electric"
                    secondType="dragon"
                />
            </div>
        </section>
    );
}