import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { IntroArea } from "../../components/IntroArea";
import { useWishList } from "../../hooks/useWishList";
import { RootState } from "../../store";
import { EmptyListError } from "../../components/emptyListError";

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
                    description="Crie sua lista de desejos com os shinies que você sonha encontrar e se prepare para a próxima grande captura."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex flex-col w-full h-75v">
                {list.length > 0 ?
                    <GenericCardsArea
                        list={list}
                        hasCatchButton
                    />
                    :
                    <EmptyListError
                        warning="Nenhum Pokémon foi marcado... ainda! Explore a Pokédex e monte sua lista de shinies desejados."
                    />
                }
            </section>
        </>
    )
}