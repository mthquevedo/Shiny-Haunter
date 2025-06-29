import { Link } from "react-router-dom";

interface EmptyListErrorProps {
    warning: string;
}

export function EmptyListError({ warning }: EmptyListErrorProps) {
    return (
        <section className="flex items-center justify-center size-full">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-lg w-[85%] lg:w-[55%] xl:w-[50%] 2xl:w-[35%]">
                <img
                    src="/assets/Opss.png"
                    alt="Ícone de aviso"
                    className="w-32 opacity-70 mb-4"
                />

                <p className="text-primary text-xl font-semibold mb-1">Opss!</p>

                <p className="text-gray-500 text-sm mb-4">
                    {warning}
                </p>

                <Link
                    to="/pokedex"
                    className="bg-gradient-to-r from-buttoncyan to-indigo-500 px-5 py-2 rounded-lg text-white text-sm font-medium shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                    Começar a explorar
                </Link>
            </div>
        </section>
    )
}