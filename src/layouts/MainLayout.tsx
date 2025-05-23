import { useTranslation } from "react-i18next";
import { HiHome, HiOutlineSparkles } from "react-icons/hi2";
import { IoMdListBox } from "react-icons/io";
import { MdCatchingPokemon } from "react-icons/md";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { FooterPage } from "../components/FooterPage";
import { HeaderPage } from "../components/HeaderPage";
import { LoadingScreen } from "../components/LoadingScreen";
import { MenuItem } from "../components/Menu/MenuItem";
import { RootState } from "../store";

export const MainLayout = () => {
    const isLoading = useSelector((state: RootState) => state.allPokemonList.loading);
    const { hasWishNotification } = useSelector((state: RootState) => state.wishlist);
    const { t } = useTranslation();

    return (
        <section className="flex font-poppins">
            {isLoading ?
                <LoadingScreen />
                :
                <>
                    <aside className="flex flex-col justify-between items-center bg-menuback w-5v h-100v py-6 border-r border-neutral-500 overflow-hidden overflow-y-hidden">
                        <div className="flex flex-col items-center">
                            <img className="h-auto w-14 rounded-lg" src="src/assets/logo.jpg" alt="Logotipo" />

                            <nav className="flex flex-col justify-center items-center px-5 mt-[1.8rem] gap-6 text-gray-50">
                                <MenuItem icon={HiHome} altText={"Ícone do Início"} text={t("sidebar.home")} to={"/"} />
                                <MenuItem icon={MdCatchingPokemon} altText={"Ícone da Pokédex"} text={"Dex"} to={"pokedex"} />
                                <MenuItem icon={IoMdListBox} altText={"Ícone da Lista de desejos"} text={"Desejos"} to={"listadedesejos"} notification={hasWishNotification} />
                                <MenuItem icon={HiOutlineSparkles} altText={"Ícone dos Meus shinys"} text={"Shinys"} to={"shinys"} />
                            </nav>
                        </div>

                        <div className="flex flex-col justify-center gap-4">
                            <hr className="border-stone-400 mx-px" />

                            <p className="bg-neutral-700 p-1 font-medium text-xs text-stone-300 border border-neutral-600 rounded-md">Versão 1.0</p>
                        </div>
                    </aside>

                    <main className="overflow-hidden">
                        <section className="flex flex-col justify-between bg-gradient-to-tl bg-backcolor w-95v h-100v pt-11 pb-6 px-10">
                            <HeaderPage />

                            <Outlet />

                            <FooterPage />
                        </section>
                    </main>
                </>
            }
        </section>
    );
}