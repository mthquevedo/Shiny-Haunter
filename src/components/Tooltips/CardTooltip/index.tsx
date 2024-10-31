import { Tooltip, TooltipRefProps } from "react-tooltip";
import "./CardTooltip.css"

interface TooltipProps extends Partial<TooltipRefProps> {
    id: string;
}

export function CardTooltip({ id, ...props }: TooltipProps) {
    return (

        <Tooltip
            {...props}
            id={id}
            place={props.place}
            className="card-tooltip"
            noArrow
        />
    )
}