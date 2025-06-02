import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { IntroArea } from "../../components/IntroArea";
import { useWishList } from "../../hooks/useWishList";
import { RootState } from "../../store";

export function Wishlist() {
    const { resetNotificationState } = useWishList();
    const { list, hasWishNotification } = useSelector((state: RootState) => state.wishlist);

    useEffect(() => {
        if (hasWishNotification) {
            resetNotificationState();
        }
    }, []);

    return (
        <>
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Lista de desejos"
                    description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex flex-col w-full h-75v">
                <GenericCardsArea
                    list={list}
                    hasCatchButton
                />
            </section>
        </>
    )
}