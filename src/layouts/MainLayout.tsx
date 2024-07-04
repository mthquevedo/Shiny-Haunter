import { HiSun } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import { MenuItem } from "../components/MenuItem";

export const MainLayout = () => {
    return (
        <section className="w-screen min-h-screen flex font-poppins">
            <aside className="bg-primary w-15v min-w-44 h-100v pt-7 pb-8 pl-6 pr-6 border-r border-indigo-400 flex flex-col justify-between">
                <div>
                    <div className="flex gap-2 items-center mb-2">
                        <img className="h-16 w-16 rounded" src="src/assets/logo.jpg" alt="logotipo" />
                        <div className="text-menucyan font-semibold text-3xl">
                            <p>Shiny</p>
                            <p>Haunter</p>
                        </div>
                    </div>

                    <nav className="mt-11 flex flex-col gap-7 text-gray-50">
                        <MenuItem icon={"src/assets/pokeball.png"} altText={"Ícone do Início"} text={"Início"} to={"/"} />
                        <MenuItem icon={"src/assets/greatball.png"} altText={"Ícone da Pokédex"} text={"Pokédex"} to={"pokemon/list"} />
                        <MenuItem icon={"src/assets/ultraball.png"} altText={"Ícone da Lista de desejos"} text={"Lista de desejos"} to={"pokemon/list"} />
                        <MenuItem icon={"src/assets/masterball.png"} altText={"Ícone dos Meus shinys"} text={"Meus shinys"} to={"pokemon/list"} />
                    </nav>
                </div>

                <div className="flex flex-col gap-4 text-gray-50">

                    <hr className="border-stone-300" />

                    <div className="flex items-center gap-2">
                        <HiSun className="h-auto w-9" />
                        <p>Modo claro</p>
                    </div>
                </div>
            </aside>

            <main className="flex">
                <Outlet />
            </main>
        </section>
    );
}