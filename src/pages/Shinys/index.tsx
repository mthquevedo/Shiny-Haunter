import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { useCatchList } from "../../hooks/useCatchList";
import { RootState } from "../../store";
import { EmptyListError } from "../../components/emptyListError";
import { IntroArea } from "../../components/introArea";
import { useTranslation } from "react-i18next";

export function Shinys() {
    const { t } = useTranslation();
    const { resetNotificationState } = useCatchList();
    const { list, hasCatchNotification } = useSelector((state: RootState) => state.catchlist);

    useEffect(() => {
        if (hasCatchNotification) {
            resetNotificationState();
        }
    }, [hasCatchNotification, resetNotificationState])

    return (
         <section className="flex flex-col items-center justify-start gap-2 lg:gap-3 xl:gap-3 2xl:gap-6 h-[91%]">
            <IntroArea.Root>
                <IntroArea.Texts
                    title={t('shinys.my_shinys')}
                    description={t('shinys.review_captured')}
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
                        warning={t('shinys.no_captures_warning')}
                    />
                }
            </section>
        </section>
    )
}