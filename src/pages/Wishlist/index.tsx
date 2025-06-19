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
        <section className="flex flex-col items-center justify-start gap-2 lg:gap-3 xl:gap-3 2xl:gap-6 h-[91%]">
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Lista de desejos"
                    description="Crie sua lista de desejos com os shinies que você sonha encontrar e se prepare para a próxima grande captura."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex w-full h-[86%] xsm:h-[93%] md:h-[88%] lg:h-[87%] xl:h-[91%]">
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
        </section>
    )
}