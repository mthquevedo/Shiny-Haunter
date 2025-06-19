import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { usePreferences } from "../../hooks/usePreferences";
import { cn } from "../../lib/cn";
import { RootState } from "../../store";

const ACTIVE_BUTTON = "bg-primary text-white hover:text-white hover:bg-indigo-800";

export function IntroAreaViewButton() {
    const currentView = useSelector((state: RootState) => state.userPreferences.view);
    const isGridView = currentView === "grid";
    const isListView = currentView === "list";
    const { changeView } = usePreferences();

    return (
        <section>
            <p className="hidden lg:inline-block text-xs mb-1">Visualizar por:</p>

            <div className="flex items-center justify-end gap-2">
                <button
                    className={cn("flex items-center justify-center w-9 h-9 hover:shadow-md text-neutral-500 bg-neutral-300 hover:text-neutral-700 active:scale-95 transition duration-100 rounded-lg", { [ACTIVE_BUTTON]: isGridView })}
                    onClick={() => changeView("grid")}
                >
                    <BsFillGridFill className="text-lg" />
                </button>
                <button
                    className={cn("flex items-center justify-center w-9 h-9 hover:shadow-md text-neutral-500 bg-neutral-300 hover:text-neutral-700 active:scale-95 transition duration-100 rounded-lg", { [ACTIVE_BUTTON]: isListView })}
                    onClick={() => changeView("list")}
                >
                    <FaList className="text-lg" />
                </button>
            </div>
        </section>
    )
}