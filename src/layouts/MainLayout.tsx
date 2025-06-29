import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { FooterPage } from "../components/FooterPage";
import { HeaderPage } from "../components/HeaderPage";
import { LoadingScreen } from "../components/LoadingScreen";
import { Menu } from "../components/Menu";
import { RootState } from "../store";

export const MainLayout = () => {
    const isLoading = useSelector((state: RootState) => state.allPokemonList.loading);

    return (
        <section className="flex flex-col-reverse md:flex-row font-poppins">
            {isLoading ?
                <LoadingScreen />
                :
                <>
                    <Menu />

                    <main className="flex flex-col items-center justify-between bg-backcolor w-full md:w-90v lg:w-93v xl:w-94v 2xl:w-96v h-92v xsm:h-93v md:h-100v px-7 lg:px-10 pt-4 pb-2 xsm:pb-3 md:pt-9 xl:pt-6 md:pb-6 overflow-hidden">
                        <div className="flex flex-col justify-start h-[96%] w-full">
                            <HeaderPage />

                            <Outlet />
                        </div>

                        <FooterPage />
                    </main>
                </>
            }
        </section >
    );
}