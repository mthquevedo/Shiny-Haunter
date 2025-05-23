import { genericPokemon } from "../../constants/pokemon.constants";
import { TypeShelf } from "../PokeCard/typeShelf";
import { DeleteButton } from "./deleteButton";


export function GenericCardGrid({ pokemon }: genericPokemon) {
    return (
        <article
            key={pokemon.id}
            className="flex flex-col items-center bg-neutral-300 w-8v rounded-lg p-2"
        >
            <header className="flex w-full items-center justify-between pb-2">
                <TypeShelf types={pokemon.type} />

                <div className="flex gap-2">
                    <button>b2</button>

                    <DeleteButton name={pokemon.name} />
                </div>
            </header>

            <img
                src={pokemon.image}
                alt={`Imagem do pokémon ${pokemon.name}`}
                loading="lazy"
                className="w-36"
            />

            <h3 className="">{pokemon.name}</h3>
        </article>
    )
}