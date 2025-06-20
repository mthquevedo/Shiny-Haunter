import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { IntroArea } from "../../components/IntroArea";
import { useCatchList } from "../../hooks/useCatchList";
import { RootState } from "../../store";
import { EmptyListError } from "../../components/emptyListError";

export function Shinys() {
    const { resetNotificationState } = useCatchList();
    const { list, hasCatchNotification } = useSelector((state: RootState) => state.catchlist);

    useEffect(() => {
        if (hasCatchNotification) {
            resetNotificationState();
        }
    }, [])

    return (
         <section className="flex flex-col items-center justify-start gap-2 lg:gap-3 xl:gap-3 2xl:gap-6 h-[91%]">
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Meus Shinys"
                    description="Revise os Pokémon que você já capturou e acompanhe o progresso da sua jornada como Mestre Pokémon."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

             <section className="flex w-full h-[86%] xsm:h-[93%] md:h-[88%] lg:h-[87%] xl:h-[91%] pb-2 md:pb-0">
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
        </section>
    )
}