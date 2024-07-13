import { Outlet } from "react-router-dom";
import { MenuItem } from "../components/Menu/MenuItem";
import { ThemeToggle } from "../components/Menu/ThemeToggle";
import { Logo } from "../components/Menu/Logo";
import { useTranslation } from "react-i18next";

export const MainLayout = () => {
    const { t } = useTranslation()

    return (
        <section className="w-screen min-h-screen flex font-poppins">
            <aside className="bg-primary w-15v min-w-44 h-100v pt-7 pb-8 border-r border-indigo-400 flex flex-col justify-between">
                <div>
                    <Logo />

                    <nav className="mt-11 flex flex-col gap-7 text-gray-50">
                        <MenuItem icon={"src/assets/pokeball.png"} altText={"Ícone do Início"} text={t("sidebar.home")} to={"/"} />
                        <MenuItem icon={"src/assets/greatball.png"} altText={"Ícone da Pokédex"} text={"Pokédex"} to={"pokedex"} />
                        <MenuItem icon={"src/assets/ultraball.png"} altText={"Ícone da Lista de desejos"} text={"Lista de desejos"} to={"listadedesejos"} />
                        <MenuItem icon={"src/assets/masterball.png"} altText={"Ícone dos Meus shinys"} text={"Meus shinys"} to={"shinys"} />
                    </nav>
                </div>

                <div className="flex flex-col gap-4 text-gray-50 pl-6 pr-6 ">
                    <hr className="border-stone-300" />

                    <ThemeToggle />
                </div>
            </aside>

            <main className="flex">
                <Outlet />
            </main>
        </section>
    );
}