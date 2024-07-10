export function Logo() {
    return (
        <div className="flex gap-2 items-center mb-2 pl-6 pr-6">
            <img className="h-16 w-16 rounded" src="src/assets/logo.jpg" alt="logotipo" />
            <div className="text-menucyan font-semibold text-3xl">
                <p>Shiny</p>
                <p>Haunter</p>
            </div>
        </div>
    )
}