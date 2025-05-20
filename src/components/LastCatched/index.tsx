import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import warningImg from "../../assets/Opss.png";
import { RootState } from "../../store";

export function LastCatched() {
    const catchlist = useSelector((state: RootState) => state.catchlist.catchlist);
    const lastCatched = catchlist.slice(-3)

    return (
        <div className="flex flex-col justify-between bg-white w-43v h-28v px-5 py-4 rounded-lg shadow">
            {lastCatched[0] ?
                <>
                    <header className="flex items-center justify-between mb-1">
                        <h2 className="font-medium text-darkgray">Últimos pokémon capturados</h2>
                        <Link to="shinys" className="py-1 px-2 font-medium text-xs text-zinc-800 rounded-md border border-zinc-300  hover:bg-gray-200 transition hover:shadow-sm ">
                            <p>Ver todos</p>
                        </Link>
                    </header>

                    <ul className="flex-1">
                        {lastCatched.map(item => {
                            return (
                                <li
                                    key={item.name}
                                    className="flex items-center bg-indigo-50 my-3 px-4 justify-between text-sm rounded-md text-darkgray"
                                >
                                    <div className="flex gap-4 items-center">
                                        <img src={item.image} alt={`Imagem do pokémon ${item.name}`} className="w-12 h-12" />

                                        <p className="font-medium">{item.name}</p>
                                    </div>

                                    <div className="flex flex-col gap-1 text-right">
                                        <p className="text-xs font-medium">Adicionado em:</p>
                                        <time className="text-sm">{item.date}</time>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </>
                :
                <div className="flex flex-col gap-1 items-center justify-center h-full">
                    <img src={warningImg} alt="Ícone de aviso" className="w-28 pb-2 opacity-80" />
                    <p className="text-primary font-medium text-lg">Opss!</p>
                    <p className="text-darkgray text-sm"> Você ainda não capturou nenhum pokémon.</p>
                </div>
            }
        </div>
    )
}