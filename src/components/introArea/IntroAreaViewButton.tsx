import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";

export function IntroAreaViewButton() {
    return (
        <section>
            <p className="text-xs font-medium mb-1">Visualização:</p>
            <div className="flex items-center justify-end gap-2">
                <button className="flex items-center justify-center w-9 h-9  rounded-lg transition active:scale-95 duration-100 hover:shadow-md bg-primary hover:bg-indigo-700">
                    <BsFillGridFill className="text-white text-lg" />
                </button>
                <button className="flex items-center justify-center w-9 h-9 rounded-lg transition active:scale-95 duration-100 hover:shadow-md bg-primary hover:bg-indigo-700">
                    <FaList className="text-white text-lg" />
                </button>
            </div>
        </section>
    )
}