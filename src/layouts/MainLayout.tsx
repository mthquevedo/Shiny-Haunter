import { Outlet } from "react-router-dom";
import { MenuItem } from "../components/MenuItem";
import { ThemeToggle } from "../components/ThemeToggle";

export const MainLayout = () => {

    return (
        <section className="w-screen min-h-screen flex font-poppins">
            <aside className="bg-primary w-15v min-w-44 h-100v pt-7 pb-8 border-r border-indigo-400 flex flex-col justify-between">
                <div>
                    <div className="flex gap-2 items-center mb-2 pl-6 pr-6">
                        <img className="h-16 w-16 rounded" src="src/assets/logo.jpg" alt="logotipo" />
                        <div className="text-menucyan font-semibold text-3xl">
                            <p>Shiny</p>
                            <p>Haunter</p>
                        </div>
                    </div>

                    <nav className="mt-11 flex flex-col gap-7 text-gray-50">
                        <MenuItem icon={"src/assets/pokeball.png"} altText={"Ícone do Início"} text={"Início"} to={"/"} />
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