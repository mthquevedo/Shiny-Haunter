import { Progress } from "radix-ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function LoadingScreen() {
    const [progress, setProgress] = useState(10);
    const isLoading = useSelector((state: RootState) => state.allPokemonList.loading);

    useEffect(() => {
        let timer = setTimeout(() => setProgress(50), 1000);
        timer = setTimeout(() => setProgress(100), 2500);
        if (isLoading === false) {
            return () => clearTimeout(timer)
        }
    }, [])

    return (
        <div className="flex flex-col gap-4 justify-center items-center bg-gradient-to-tr from-indigo-800 to-primary w-100v h-100v overflow-hidden">
            <img className="h-auto w-72" src="src/assets/Gengar loading.gif" alt="Gif do gengar" />

            <p className="text-lg text-neutral-100 mb-2">Aguarde enquanto capturamos o Gengar que fugiu...</p>

            <Progress.Root className="h-6 w-96 bg-slate-900 border-2 border-menucyan overflow-hidden rounded-full" value={progress}>
                <Progress.Indicator className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-white transition-transform duration-[660ms]" style={{ transform: `translateX(-${100 - progress}%)` }} />
            </Progress.Root>

        </div>
    )
}