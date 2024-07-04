import { Link, Outlet } from "react-router-dom";


export const MainLayout = () => {
    return (
        <section className="w-screen min-h-screen flex font-poppins">
            <aside className="bg-primary w-15v min-w-44 h-100v p-5 border-r border-indigo-400">
                <div className="flex gap-2 items-center my-2">
                    <img className="h-16 w-16 rounded" src="src/assets/logo.jpg" alt="logotipo" />
                    <div className="text-menucyan font-semibold text-3xl">
                        <p>Shiny</p>
                        <p>Haunter</p>
                    </div>
                </div>

                <nav className="mt-10 flex flex-col gap-7 text-gray-50">
                    <Link to="/">Início</Link>
                    <Link to="pokemon/list">Pokédex</Link>
                    <Link to="pokemon/list">Lista de desejos</Link>
                    <Link to="pokemon/list">Meus shinys</Link>
                </nav>
            </aside>
            <main className="flex">
                <Outlet />
            </main>
        </section>
    );
}