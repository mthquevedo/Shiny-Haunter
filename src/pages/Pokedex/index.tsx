import { FooterPage } from "../../components/FooterPage";
import { HeaderPage } from "../../components/HeaderPage";
import { PokeCardsArea } from "../../components/PokeCardsArea";
import { SearchArea } from "../../components/SearchArea";
import { usePokedex } from "../../hooks/usePokedex";

export function Pokedex() {
    const { handleNextPage, handlePreviousPage, next, previous } = usePokedex();

    return (
        <section className="bg-gradient-to-tl from-backcolor to-white w-95v h-100v pt-11 pb-9 px-10 flex gap-4 flex-col justify-between">
            <HeaderPage />

            <SearchArea
                title="Pokédex"
                description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
            />

            <section className="flex flex-col justify-around gap-5 w-full h-75v">
                <PokeCardsArea />

                <div className="flex gap-4 items-center justify-center">
                    <button
                        onClick={handlePreviousPage}
                        disabled={!previous}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-5 disabled:active:scale-100 active:scale-[0.98] font-medium text-sm shadow-md transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={!next}
                        className="bg-primary hover:bg-indigo-800 active:bg-indigo-900 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:select-none text-white rounded-md py-2 px-4 disabled:active:scale-100 active:scale-[0.98] font-medium text-sm shadow-md transition"
                    >
                        Próximo
                    </button>
                </div>
            </section>

            <FooterPage />
        </section>
    );
}