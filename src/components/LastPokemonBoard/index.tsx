import { Link } from "react-router-dom";
import warningImg from "../../assets/Opss.png";
import { genericSubListItem } from "../../constants/pokemon.constants";

interface lastPokemonBoardprops {
    list: genericSubListItem[];
    to: string;
    tittle: string;
    warningTittle: string;
    warningDescription: string;
}

export function LastPokemonBoard({ list, to, tittle, warningDescription, warningTittle }: lastPokemonBoardprops) {
    return (
        <section className="flex flex-col justify-start  bg-white w-full lg:w-43v 2xl:w-[49%] h-[46%] min-h-fit lg:h-28v 2xl:h-[80%] px-4 md:px-5 py-2 md:py-4 rounded-xl shadow-md overflow-hidden">
            {list[0] ?
                <>
                    <header className="flex items-center justify-between pb-2 md:pb-4 lg:pb-3">
                        <h2 className="font-medium text-darkgray text-xs xsm:text-sm md:text-base">{tittle}</h2>
                        <Link to={to} className="py-1 px-2 font-medium text-[0.5rem] xsm:text-[0.6rem] md:text-xs text-zinc-800 bg-gray-200 rounded-md hover:bg-gray-300 transition hover:shadow-sm">
                            <p>Ver todos</p>
                        </Link>
                    </header>

                    <ul>
                        {list.map(item => {
                            return (
                                <li
                                    key={item.name}
                                    className="flex items-center justify-between bg-indigo-50 my-1.5 first:mt-0 last:mb-0 md:my-3 px-2 md:px-4 lg:px-3 rounded-md text-darkgray h-[1.68rem] xsm:h-[2.4rem] xsx:h-[2.8rem] md:h-[3.2rem] lg:h-[3rem] xl:h-[3rem] 2xl:h-[3.2rem]"
                                >
                                    <div className="flex gap-3 xsm:gap-4 items-center h-full">
                                        <img src={item.image} alt={`Imagem do pokémon ${item.name}`} className="h-[90%] md:h-[100%] w-auto" />

                                        <p className="font-medium text-[0.65rem] xsm:text-sm">{item.name}</p>
                                    </div>

                                    <div className="flex flex-col md:gap-1 text-right w-fit text-nowrap">
                                        <p className="text-[0.5rem] xsm:text-[0.65rem] md:text-xs lg:text-xs">Adicionado em:</p>
                                        <time className="text-[0.6rem] xsm:text-[0.7rem] md:text-sm lg:text-xs font-medium">{item.date}</time>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </>
                :
                <div className="flex flex-col gap-1 items-center justify-center text-center h-full">
                    <img src={warningImg} alt="Ícone de aviso" className="h-[65%] md:h-[65%] lg:h-[55%] pb-1 md:pb-2 opacity-80" />
                    <p className="text-primary md:text-xl font-semibold">{warningTittle}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{warningDescription}</p>
                </div>
            }
        </section>
    )
}