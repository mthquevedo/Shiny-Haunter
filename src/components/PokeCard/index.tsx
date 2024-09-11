import { TypeFlag } from "../TypeFlag";

export function PokeCard() {
    return (
        <article
            className="flex flex-col bg-white w-15v mt-3 py-3 px-4 rounded-md shadow-md">
            <section className="flex flex-col justify-between bg-electricback w-full p-2">
                <div>
                    <p>#999</p>
                    <p>Paldea</p>
                </div>

                <img src="./src/assets/1008.png" alt="" className="" />

                <p>Miraidon</p>

            </section>

            <footer className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                    <TypeFlag type="Electric" flagColor="bg-electric" />
                    {/* <TypeFlag icon={getPokemonTypeSVG("electric")} type="type" flagColor="bg-electric" />
                    <TypeFlag icon="./src/assets/typesIcons/dragon.svg" type="Dragon" flagColor="bg-dragon" /> */}
                </div>

                <button className="text-sm">
                    + Adicionar
                </button>
            </footer>
        </article>
    );
}