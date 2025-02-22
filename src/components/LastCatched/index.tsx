import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { PiEmptyBold } from "react-icons/pi";

export function LastCatched() {
    const catchlist = useSelector((state: RootState) => state.catchlist.catchlist);
    const lastCatched = catchlist.slice(-3)

    return (
        <div className="bg-white w-43v h-28v px-5 py-3 rounded-lg shadow">
            {lastCatched[0] ?
                <>
                    <p className="font-medium text-darkgray">Últimos pokémon capturados</p>

                    {lastCatched.map(item => {
                        return (
                            <div key={item.name} className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
                                <div className="flex gap-4 items-center">
                                    <img src={item.image} alt="Foto de pokémon" className="w-12 h-12" />
                                    <p>{item.name}</p>
                                </div>

                                <p>{item.date}</p>
                            </div>
                        )
                    })}
                    <Link to="shinys" className="text-xs font-bold text-primary text-right pt-1 hover:underline">
                        <p>Ver lista completa</p>
                    </Link>
                </>
                :
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <PiEmptyBold className="text-primary text-5xl" />
                    <p className="text-darkgray text-sm">Você ainda não capturou nenhum pokémon.</p>
                </div>
            }
        </div>
    )
}