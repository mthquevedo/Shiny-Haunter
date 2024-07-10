import { FooterPage } from "../../components/FooterPage";
import { HeaderPage } from "../../components/HeaderPage";
import { SearchForm } from "../../components/SearchForm";

export function Pokedex() {
    return (
        <section className="bg-backcolor w-85v h-100v pt-7 pb-9 pl-10 pr-10 flex flex-col justify-between">
            <HeaderPage />

            <SearchForm
                formTitle="Pokédex"
                formDescription="Procure por um pokémon específico ou explore a pokedex de cada região"
            />

            <FooterPage />
        </section>
    );
}