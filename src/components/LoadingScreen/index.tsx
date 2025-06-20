import { Progress } from "radix-ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function LoadingScreen() {
    const [progress, setProgress] = useState(10);
    const isLoading = useSelector((state: RootState) => state.allPokemonList.loading);

    useEffect(() => {
        let timer = setTimeout(() => setProgress(60), 1200);
        timer = setTimeout(() => setProgress(100), 2600);
        if (isLoading === false) {
            return () => clearTimeout(timer)
        }
    }, [])

    return (
        <main className="flex items-center justify-center bg-gradient-to-br from-indigo-600 to-primary w-100v h-100v overflow-hidden">
            <section className="flex flex-col items-center justify-center gap-4 w-[80%]">
                <img className="h-auto w-[90%] md:w-[60%] lg:w-[30%]" src="src/assets/Gengar loading.gif" alt="Animação de carregamento da página" />

                <h1 className="font-medium text-center text-lg md:text-xl text-neutral-100 mb-2">Aguarde enquanto capturamos o Gengar que fugiu...</h1>

                <Progress.Root className="h-6 xsm:h-7 md:h-9 lg:h-7 w-full md:w-[90%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%] bg-slate-900 border-2 border-primary overflow-hidden rounded-full" value={progress}>
                    <Progress.Indicator className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-neutral-50 transition-transform duration-[660ms]" style={{ transform: `translateX(-${100 - progress}%)` }} />
                </Progress.Root>
            </section>
        </main>
    )
}