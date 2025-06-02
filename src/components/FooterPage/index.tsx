import { useMatch } from "react-router-dom";

export function FooterPage() {
    const isHomePage = useMatch("/");

    return (
        <div className="text-xs w-full flex items-center justify-between text-darkgray">
            {isHomePage && (
                <p className="font-medium mt-3">*Projeto sem fins lucratrivos.</p>
            )}
            <p className="flex-1 text-right font-bold">Criador por <a href="https://github.com/mthquevedo" target="_blank" className="text-primary hover:text-indigo-800">@Matheus Quevedo</a></p>
        </div>
    );
}