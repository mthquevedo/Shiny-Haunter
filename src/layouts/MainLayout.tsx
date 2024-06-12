import { Link, Outlet } from "react-router-dom";


export const MainLayout = () => {
    return (
        <section className="w-screen min-h-screen flex">
            <aside className="bg-zinc-100 w-15v min-w-44 h-100v p-5 border-r border-zinc-200">
                <p>Logo</p>

                <nav className="mt-10 flex flex-col gap-7">
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