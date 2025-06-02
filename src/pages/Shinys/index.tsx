import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { IntroArea } from "../../components/IntroArea";
import { useCatchList } from "../../hooks/useCatchList";
import { RootState } from "../../store";

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
                    description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex flex-col w-full h-75v">
                <GenericCardsArea
                    list={list}
                />
            </section>
        </>
    )
}