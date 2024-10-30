import { Tooltip, TooltipRefProps } from "react-tooltip"

interface TooltipProps extends TooltipRefProps {
    id: string;
}

export function CardTooltip({ id, place }: TooltipProps) {
    return (
        <Tooltip
            id={id}
            place={place}
        />
    )
}