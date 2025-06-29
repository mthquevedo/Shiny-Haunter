import { useSelector } from "react-redux";
import { HeroBanner } from "../../components/heroBanner";
import { HiddenScrollBar } from "../../components/hiddenScrollBar";
import { LastPokemonBoard } from "../../components/LastPokemonBoard";
import { RootState } from "../../store";
import { useTranslation } from "react-i18next";

export function HomePage() {
    const { t } = useTranslation();
    const lastWished = useSelector((state: RootState) => state.wishlist.list).slice(-4);
    const lastCatched = useSelector((state: RootState) => state.catchlist.list).slice(-4);

    return (
        <section className="w-full h-[95%]">
            <HiddenScrollBar>
                <section className="flex flex-col items-center justify-start gap-5 x93:gap-3 xsm:gap-6 md:gap-8 lg:gap-7 2xl:gap-10 size-full">
                    <HeroBanner />

                    <section className="flex flex-col w-full h-[56%] 2xl:justify-between lg:flex-row gap-5 x93:gap-3 xsm:gap-6 md:gap-8 lg:gap-10">
                        <LastPokemonBoard
                            list={lastWished}
                            tittle={t('home.last_wished_title')}
                            to="listadedesejos"
                            warningTittle={t('home.no_shiny_in_list')}
                            warningDescription={t('home.add_favorites')}
                        />

                <LastPokemonBoard
                    list={lastCatched}
                    tittle={t('home.last_catched_title')}
                    to="shinys"
                    warningTittle={t('home.pokeball_empty')}
                    warningDescription={t('home.catch_and_see')}
                />
                    </section>
                </section>
            </HiddenScrollBar>
        </section>
    );
}