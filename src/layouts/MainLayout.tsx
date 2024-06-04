import { Link, Outlet } from "react-router-dom";

type Props = {
 
}
export const MainLayout = ({}: Props) => {
    return ( 
        <div className="w-screen min-h-screen flex">
            <aside className="w-80 bg-slate-500 flex min-h-full flex-col p-5 gap-2">
                <Link to="/">Home</Link>
                <Link to="pokemon/list">List</Link>
            </aside>
            <main className="flex">
                <Outlet />
            </main>
        </div>
    );
}