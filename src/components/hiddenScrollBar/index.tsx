import { ScrollArea } from "radix-ui";
import { ReactNode } from "react";

interface HiddenScrollBarProps {
    children: ReactNode;
}

export function HiddenScrollBar({ children }: HiddenScrollBarProps) {
    return (
        <ScrollArea.Root className="size-full">
            <ScrollArea.Viewport className="size-full">
                {children}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                className="hidden"
                orientation="vertical"
            >
                <ScrollArea.Thumb className="hidden" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root >
    )
}