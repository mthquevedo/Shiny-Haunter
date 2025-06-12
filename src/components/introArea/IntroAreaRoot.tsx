import { ReactNode } from "react";

interface IntroAreaRoot {
    children: ReactNode;
}

export function IntroAreaRoot({ children }: IntroAreaRoot) {
    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-between mt-2 md:mt-3 lg:mt-0 justify-between w-full">
            {children}
        </div>
    );
}