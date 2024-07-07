import { Link, LinkProps, useMatch } from "react-router-dom";
import { cn } from "../../lib/cn";
interface MenuItemProps extends LinkProps {
    icon: string;
    text: string;
    altText: string;
}
const ACTIVE_TEXT_COLOR = "text-menucyan font-bold";

export function MenuItem({ text, icon, altText, to, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString())

    return (
        <Link {...props} to={to} className="flex items-center gap-2">
            <img src={icon} alt={altText} className="h-auto w-9" />
            <p className={cn("pt-3", {[ACTIVE_TEXT_COLOR]: isActive})}>
                {text}
            </p>
        </Link>
    );
}