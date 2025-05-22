import { genericPokemon } from "../../constants/pokemon.constants";
import { TypeShelf } from "../PokeCard/typeShelf";

export function GenericCardGrid({ pokemon }: genericPokemon) {
    return (
        <article
            key={pokemon.id}
            className="mr-2 flex flex-col items-center bg-neutral-300 w-8v rounded-lg p-2"
        >
            <header className="flex w-full items-center justify-between pb-2">
                <TypeShelf types={pokemon.type} />

                <div className="">
                    <button>b1</button>

                    <button>b2</button>
                </div>
            </header>

            <img
                src={pokemon.image}
                alt={`Imagem do pokémon ${pokemon.name}`}
                loading="lazy"
                className=""
            />

            <h3 className="">{pokemon.name}</h3>
        </article>
    )
}