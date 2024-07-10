import { Link, LinkProps, useMatch } from "react-router-dom";
import { cn } from "../../../lib/cn";
interface MenuItemProps extends LinkProps {
    icon: string;
    text: string;
    altText: string;
}

const ACTIVE_TEXT_COLOR = "text-menucyan font-bold";
const ACTIVE_BG = "transition ease-in-out delay-50 bg-backcolor/10 pl-5 pr-0 w-56 border-l-4 border-menucyan rounded-tr-lg rounded-br-lg";

export function MenuItem({ text, icon, altText, to, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString())

    return (
        <div className={cn("py-2 pl-6 pr-6", { [ACTIVE_BG]: isActive })}>
            <Link {...props} to={to} className="flex items-center gap-2">
                <img src={icon} alt={altText} className="h-auto w-9" />
                <p className={cn("pt-1", { [ACTIVE_TEXT_COLOR]: isActive })}>
                    {text}
                </p>
            </Link>
        </div>
    );
}