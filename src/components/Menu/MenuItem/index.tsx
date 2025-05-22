import { IconType } from "react-icons/lib";
import { Link, LinkProps, useMatch } from "react-router-dom";
import { cn } from "../../../lib/cn";
interface MenuItemProps extends LinkProps {
    icon: IconType;
    text: string;
    altText: string;
}

const ACTIVE_BG = "hover:bg-neutral-400/30 bg-neutral-400/30 border-2 border-neutral-600 shadow-lg";
const ACTIVE_TEXT = "font-medium";
const ACTIVE_ICON = "text-neutral-50";

export function MenuItem({ text, icon: Icon, altText, to, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString())

    return (
        <Link {...props} to={to}>
            <div className={cn("flex flex-col items-center justify-center gap-1.5 w-16 h-16 border-2 border-menuback hover:bg-neutral-400/30 hover:shadow-lg active:scale-95 transition duration-75 rounded-lg", { [ACTIVE_BG]: isActive })}>
                <Icon aria-label={altText} className={cn("h-auto w-7 text-neutral-400", { [ACTIVE_ICON]: isActive })} />

                <span className={cn("text-xs text-neutral-300 transition", { [ACTIVE_TEXT]: isActive })}>{text}</span>
            </div>
        </Link>
    );
}   