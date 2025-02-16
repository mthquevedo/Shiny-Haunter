import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";

export function LastCatched() {
    const catchlist = useSelector((state: RootState) => state.catchlist.catchlist);

    return (
        <div className="bg-white w-43v h-fit min-h-52 px-5 py-3 rounded-lg shadow">
            <p className="font-medium text-darkgray">Últimos pokémon capturados</p>

            {catchlist.map(item => {
                return (
                    <div className="flex items-center my-2 pl-4 pb-1 justify-between text-sm border-b-2 text-darkgray">
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
        </div>
    )
}