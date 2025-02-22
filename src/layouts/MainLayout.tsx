import { useTranslation } from "react-i18next";
import { BsList } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdCatchingPokemon } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { MenuItem } from "../components/Menu/MenuItem";
import { ThemeToggle } from "../components/Menu/ThemeToggle";

export const MainLayout = () => {
    const { t } = useTranslation();

    return (
        <section className="flex font-poppins">
            <aside className="flex flex-col justify-between items-center bg-menuback w-4v h-100v py-8 border-r border-neutral-500">
                <div className="flex flex-col items-center">
                    <img className="h-auto w-14 rounded-lg mb-2" src="src/assets/logo.jpg" alt="Logotipo" />

                    <nav className="flex flex-col justify-center items-center px-5 mt-12 gap-10 text-gray-50">
                        <MenuItem icon={HiOutlineHome} altText={"Ícone do Início"} text={t("sidebar.home")} to={"/"} />
                        <MenuItem icon={MdCatchingPokemon} altText={"Ícone da Pokédex"} text={"Pokédex"} to={"pokedex"} />
                        <MenuItem icon={BsList} altText={"Ícone da Lista de desejos"} text={"Lista de desejos"} to={"listadedesejos"} />
                        <MenuItem icon={HiOutlineSparkles} altText={"Ícone dos Meus shinys"} text={"Meus shinys"} to={"shinys"} />
                    </nav>
                </div>

                <ThemeToggle />
            </aside>

            <main>
                <Outlet />
            </main>
        </section>
    );
}