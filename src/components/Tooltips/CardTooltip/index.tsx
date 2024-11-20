import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface CardTooltipProps extends Partial<TooltipPrimitive.TooltipProps & TooltipPrimitive.TooltipContentProps> { }

export function CardTooltip({ children, content, open, defaultOpen, onOpenChange, side, ...props }: CardTooltipProps) {
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
                    className="py-1 px-1.5 bg-cardTooltipBg text-xs rounded-md text-white shadow-md"
                    {...props}
                >
                    {content}

                    <TooltipPrimitive.Arrow className="w-2 h-1 mb-1 fill-cardTooltipBg" />
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}