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
        <section className="w-full lg:w-fit">
            <p className="text-right text-[0.625rem] font-medium md:text-base mb-0.5 md:mb-1 mt-1 xsm:mt-1.5 md:mt-0 text-darkgray">Visualizar por:</p>

            <div className="flex items-center justify-end gap-2">
                <button
                    className={cn("flex items-center justify-center size-7 md:size-9 hover:shadow-md text-neutral-500 bg-neutral-300 hover:text-neutral-700 active:scale-95 transition duration-100 rounded-md md:rounded-lg", { [ACTIVE_BUTTON]: isGridView })}
                    onClick={() => changeView("grid")}
                >
                    <BsFillGridFill className="text-sm md:text-lg" />
                </button>
                <button
                    className={cn("flex items-center justify-center  size-7 md:size-9 hover:shadow-md text-neutral-500 bg-neutral-300 hover:text-neutral-700 active:scale-95 transition duration-100 rounded-md md:rounded-lg", { [ACTIVE_BUTTON]: isListView })}
                    onClick={() => changeView("list")}
                >
                    <FaList className="text-sm md:text-lg" />
                </button>
            </div>
        </section>
    )
}