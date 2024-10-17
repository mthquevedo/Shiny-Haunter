import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (

        <div className="flex flex-col justify-center gap-4">
            <hr className="border-stone-400" />

            <div className="cursor-pointer relative animate-fade flex items-center dark:justify-end w-16 h-7 m-0.5 p-1 bg-sky-500 dark:bg-gray-800 rounded-full overflow-hidden border-2 border-white shadow-md" onClick={() => setDarkMode(!darkMode)}>
                <div className="animate-fade delay-75 absolute -z-1 -top-2 left-1 dark:left-5 w-11 h-11 bg-sky-200/30 dark:bg-zinc-200/15 rounded-full">
                </div>
                <div className="animate-fade delay-75 absolute -z-1 -top-2 -left-1 dark:left-7 w-11 h-11 bg-sky-200/40 dark:bg-zinc-200/10 rounded-full">
                </div>
                <div className="animate-fade delay-75 absolute -z-2 -top-2 -left-3 dark:left-9 w-11 h-11 bg-sky-200/50 dark:bg-zinc-200/20 rounded-full">
                </div>
                <div className="animate-fade delay-100 absolute bg-[url('src/assets/nuvens_theme.png')] left-0 dark:hidden bg-center bg-cover w-full h-full z-8">
                </div>
                <div className="animate-fade delay-100 absolute bg-[url('src/assets/stars_theme.png')] left-0 hidden dark:block bg-center bg-cover w-full h-full z-8">
                </div>
                <div className="animate-fade duration-75 ease-in-out z-10 flex items-center bg-gradient-to-t from-amber-500 to-amber-200 dark:from-gray-700 dark:to-gray-200 w-5 h-5 rounded-full p-px shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                    <div className="transition-transform duration-700 ease-in-out relative bg-amber-400 dark:bg-gray-300 w-full h-full p-1 rounded-full">
                        <span className="hidden absolute top-0.5 left-0.5 dark:block bg w-2 h-2 bg-slate-400 rounded-full shadow-inner"></span>
                        <span className="hidden absolute top-2.5 left-2 dark:block bg w-1 h-1 bg-slate-400 rounded-full shadow-inner"></span>
                        <span className="hidden absolute top-1.5 left-3 dark:block bg w-1 h-1 bg-slate-400 rounded-full shadow-inner"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}