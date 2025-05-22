import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { IntroArea } from "../../components/IntroArea";
import { RootState } from "../../store";

export function Wishlist() {
    const { list, view } = useSelector((state: RootState) => state.wishlist);
    
    return (
        <>
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Lista de desejos"
                    description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex flex-col gap-5 w-full h-75v">
                <GenericCardsArea
                    list={list}
                    view={view}
                />
            </section>
        </>
    )
}