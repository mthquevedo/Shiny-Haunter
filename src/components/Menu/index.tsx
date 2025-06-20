import { useTranslation } from "react-i18next";
import { HiHome, HiOutlineSparkles } from "react-icons/hi2";
import { IoMdListBox } from "react-icons/io";
import { MdCatchingPokemon } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { MenuItem } from "./MenuItem";
// import { t } from "i18next";

export function Menu() {
    const { hasWishNotification } = useSelector((state: RootState) => state.wishlist);
    const { hasCatchNotification } = useSelector((state: RootState) => state.catchlist);
    const { t } = useTranslation();

    return (
        <>
            {/* Menu inferior */}
            <aside className="flex md:hidden justify-center items-center bg-menuback w-full h-8v xsm:h-7v py-2 px-9 overflow-hidden">
                <nav className="flex items-center justify-between w-full">
                    <MenuItem icon={HiHome} altText={"Ícone do Início"} text={t("sidebar.home")} to={"/"} />
                    <MenuItem icon={MdCatchingPokemon} altText={"Ícone da Pokédex"} text={"Dex"} to={"pokedex"} />
                    <MenuItem icon={IoMdListBox} altText={"Ícone da Lista de desejos"} text={"Desejos"} to={"listadedesejos"} notification={hasWishNotification} />
                    <MenuItem icon={HiOutlineSparkles} altText={"Ícone dos Meus shinys"} text={"Shinys"} to={"shinys"} notification={hasCatchNotification} />
                </nav>
            </aside>

            {/* Menu lateral */}
            <aside className="hidden md:flex flex-col items-center justify-between bg-menuback w-10v max-w-11v lg:w-7v xl:w-6v 2xl:w-4v h-100v py-6 px-2 2xl:px-[0.625rem] border-r border-neutral-500 overflow-hidden overflow-y-hidden">
                <div className="flex flex-col items-center gap-7 lg:gap-6 w-full">
                    <img className="h-auto w-[90%] rounded-lg" src="assets/logo.jpg" alt="Logotipo" />

                    <nav className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-6 w-full text-gray-50">
                        <MenuItem icon={HiHome} altText={"Ícone do Início"} text={t("sidebar.home")} to={"/"} />
                        <MenuItem icon={MdCatchingPokemon} altText={"Ícone da Pokédex"} text={"Dex"} to={"pokedex"} />
                        <MenuItem icon={IoMdListBox} altText={"Ícone da Lista de desejos"} text={"Desejos"} to={"listadedesejos"} notification={hasWishNotification} />
                        <MenuItem icon={HiOutlineSparkles} altText={"Ícone dos Meus shinys"} text={"Shinys"} to={"shinys"} notification={hasCatchNotification} />
                    </nav>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <hr className="border-stone-500 mx-px w-full" />

                    <p className="bg-neutral-700 w-[90%] p-1 text-center text font-medium text-[0.65rem] text-stone-300 border border-neutral-600 rounded-md">V.1.0</p>
                </div>
            </aside>
        </>
    )
}