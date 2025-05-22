import { IntroArea } from "../../components/IntroArea";

export function Shinys() {
    return (
        <>
            <IntroArea.Root>
                <IntroArea.Texts
                    title="Meus Shinys"
                    description="Adicione os pokémon às listas de desejos ou capturados, caso prefira, busque pelo nome específico na barra de pesquisa."
                />
                <IntroArea.ViewButton />
            </IntroArea.Root>

            <section className="flex flex-col justify-around gap-5 w-full h-75v">

            </section>
        </>
    )
}