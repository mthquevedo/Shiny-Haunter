export function RegionsCards() {
    const regInfos = [
        {
            name: "Kanto",
            pokeNumber: "151"
        },
        {
            name: "Johto",
            pokeNumber: "100"
        },
        {
            name: "Hoenn",
            pokeNumber: "135"
        },
        {
            name: "Sinnoh",
            pokeNumber: "107"
        },
        {
            name: "Unova",
            pokeNumber: "156"
        },
        {
            name: "Kalos",
            pokeNumber: "72"
        },
        {
            name: "Alola",
            pokeNumber: "88"
        },
        {
            name: "Galar",
            pokeNumber: "96"
        },
        {
            name: "Paldea",
            pokeNumber: "120"
        }
    ]


    return (
        <div className="flex items-center justify-between px-2 my-2">
            {regInfos.map(reg => {
                return (
                    <div className="flex items-center justify-between gap-4 bg-slate-700 text-white py-1 px-6 rounded-md">
                        <p className="bg-white rounded-full text-slate-700 p-1">{reg.pokeNumber}</p>
                        <p> {reg.name}</p>
                    </div>
                )
            })}
        </div>
    )
}