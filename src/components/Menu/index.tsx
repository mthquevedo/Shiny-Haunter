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
            <aside className="flex md:hidden justify-center items-center bg-menuback w-full h-7v py-2 px-9 overflow-hidden">
                <nav className="flex items-center justify-between w-full">
                    <MenuItem icon={HiHome} altText={"Ícone do Início"} text={t("sidebar.home")} to={"/"} />
                    <MenuItem icon={MdCatchingPokemon} altText={"Ícone da Pokédex"} text={"Dex"} to={"pokedex"} />
                    <MenuItem icon={IoMdListBox} altText={"Ícone da Lista de desejos"} text={"Desejos"} to={"listadedesejos"} notification={hasWishNotification} />
                    <MenuItem icon={HiOutlineSparkles} altText={"Ícone dos Meus shinys"} text={"Shinys"} to={"shinys"} notification={hasCatchNotification} />
                </nav>
            </aside>

            {/* Menu lateral */}
            <aside className="hidden md:flex flex-col items-center justify-between bg-menuback w-10v max-w-11v lg:w-8v lg:max-w-9v xl:w-7v 2xl:w-5v h-100v py-6 px-2 border-r border-neutral-500 overflow-hidden">
                <div className="flex flex-col items-center gap-7">
                    <img className="h-auto w-[90%] rounded-lg" src="src/assets/logo.jpg" alt="Logotipo" />

                    <nav className="flex flex-col justify-center items-center gap-6 md:gap-8 text-gray-50">
                        <MenuItem icon={HiHome} altText={"Ícone do Início"} text={t("sidebar.home")} to={"/"} />
                        <MenuItem icon={MdCatchingPokemon} altText={"Ícone da Pokédex"} text={"Dex"} to={"pokedex"} />
                        <MenuItem icon={IoMdListBox} altText={"Ícone da Lista de desejos"} text={"Desejos"} to={"listadedesejos"} notification={hasWishNotification} />
                        <MenuItem icon={HiOutlineSparkles} altText={"Ícone dos Meus shinys"} text={"Shinys"} to={"shinys"} notification={hasCatchNotification} />
                    </nav>
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <hr className="border-stone-400 mx-px w-full" />

                    <p className="bg-neutral-700 p-1 font-medium text-[0.65rem] lg:text-xs text-stone-300 border border-neutral-600 rounded-md">Versão 1.0</p>
                </div>
            </aside>
        </>
    )
}