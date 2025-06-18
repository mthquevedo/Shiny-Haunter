import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { useCatchList } from "../../hooks/useCatchList";
import { RootState } from "../../store";
import { EmptyListError } from "../../components/emptyListError";
import { IntroArea } from "../../components/introArea";

export function Shinys() {
    const { resetNotificationState } = useCatchList();
    const { list, hasCatchNotification } = useSelector((state: RootState) => state.catchlist);

    useEffect(() => {
        if (hasCatchNotification) {
            resetNotificationState();
        }
    }, [])

    return (
        <>
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Meus Shinys"
                    description="Revise aqui os Pokémon que você já capturou e acompanhe o progresso da sua jornada como Mestre Pokémon."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex flex-col w-full h-75v">
                {list.length > 0 ?
                    <GenericCardsArea
                        list={list}
                    />
                    :
                    <EmptyListError
                        warning="Você ainda não registrou nenhuma captura. Que tal começar sua busca pelos shinies lendários?"
                    />
                }
            </section>
        </>
    )
}