import { ReactNode } from "react";

interface IntroAreaRoot {
    children: ReactNode;
}

export function IntroAreaRoot({ children }: IntroAreaRoot) {
    return (
        <div className="flex items-end mt-3 justify-between w-full">
            {children}
        </div>
    );
}