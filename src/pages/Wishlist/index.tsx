import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GenericCardsArea } from "../../components/GenericCardsArea";
import { useWishList } from "../../hooks/useWishList";
import { RootState } from "../../store";
import { EmptyListError } from "../../components/emptyListError";
import { IntroArea } from "../../components/introArea";
import { useTranslation } from "react-i18next";

export function Wishlist() {
    const { t } = useTranslation();
    const { resetNotificationState } = useWishList();
    const { list, hasWishNotification } = useSelector((state: RootState) => state.wishlist);

    useEffect(() => {
        if (hasWishNotification) {
            resetNotificationState();
        }
    }, [hasWishNotification, resetNotificationState]);

    return (
        <section className="flex flex-col items-center justify-start gap-2 lg:gap-3 xl:gap-3 2xl:gap-6 h-[91%]">
            <IntroArea.Root>
                <IntroArea.Texts
                    title={t('wishlist.title')}
                    description={t('wishlist.description')}
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex w-full h-[86%] xsm:h-[93%] md:h-[88%] lg:h-[87%] xl:h-[91%] pb-2 md:pb-0">
                {list.length > 0 ?
                    <GenericCardsArea
                        list={list}
                        hasCatchButton
                    />
                    :
                    <EmptyListError
                        warning={t('wishlist.empty_warning')}
                    />
                }
            </section>
        </section>
    )
}