import { useMatch } from "react-router-dom";

export function FooterPage() {
    const isHomePage = useMatch("/");

    return (
        <>
            {/* Versão mobile */}
            {isHomePage &&
                <footer className="flex md:hidden items-center justify-end w-full md:mt-6 lg:mt-4 2xl:mt-2">
                    <p className="text-right font-bold text-darkgray text-[0.5rem] xsm:text-[0.6rem] md:text-xs lg:text-[0.625rem]">Criador por <a href="https://github.com/mthquevedo" target="_blank" className="text-primary hover:text-indigo-800">@Matheus Quevedo</a></p>
                </footer>
            }

            {/* Versão PC */}
            <footer className="hidden md:flex items-center justify-end w-full md:mt-6 lg:mt-0 2xl:mt-2">
                <p className="text-right font-bold text-darkgray text-[0.5rem] xsm:text-[0.6rem] md:text-xs lg:text-[0.625rem] 2xl:text-[0.75rem]">Criador por <a href="https://github.com/mthquevedo" target="_blank" className="text-primary hover:text-indigo-800">@Matheus Quevedo</a></p>
            </footer>
        </>
    );
}