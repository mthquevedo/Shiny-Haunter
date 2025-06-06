import { useMatch } from "react-router-dom";

export function FooterPage() {
    const isHomePage = useMatch("/");

    return (
        <>
            {/* Versão Mobile */}
            {isHomePage &&
                <footer className="flex md:hidden flex-col md:flex-row items-start md:items-center justify-start text-[0.68rem] text-darkgray w-full h-[2%] mb-4">
                    <p className="font-medium">Projeto sem fins lucratrivos.</p>
                    <p className="flex-1 md:text-right font-bold">Criador por <a href="https://github.com/mthquevedo" target="_blank" className="text-primary hover:text-indigo-800">@Matheus Quevedo</a></p>
                </footer>
            }

            {/* Versão Web */}
            <footer className="hidden md:flex flex-col md:flex-row items-start md:items-center justify-start text-xs text-darkgray w-full h-[2%] mt-6 lg:mt-4">
                {isHomePage && (
                    <p className="font-medium">*Projeto sem fins lucratrivos.</p>
                )}
                <p className="flex-1 md:text-right font-bold">Criador por <a href="https://github.com/mthquevedo" target="_blank" className="text-primary hover:text-indigo-800">@Matheus Quevedo</a></p>
            </footer>
        </>
    );
}