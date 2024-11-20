import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface MenuTooltiProps extends Partial<TooltipPrimitive.TooltipProps & TooltipPrimitive.TooltipContentProps> { }

export function MenuTooltip({ children, content, open, defaultOpen, onOpenChange, side, ...props }: MenuTooltiProps) {
    return (
        <TooltipPrimitive.Provider delayDuration={400}>
            <TooltipPrimitive.Root
                open={open}
                defaultOpen={defaultOpen}
                onOpenChange={onOpenChange}
            >
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>

                <TooltipPrimitive.Content
                    side={side}
                    align="center"
                    className="py-1.5 px-2 bg-indigo-500 text-sm rounded-md text-white shadow-lg z-20"
                    {...props}
                >
                    {content}

                    <TooltipPrimitive.Arrow className="w-2 h-1 mb-2 fill-indigo-500" />
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}