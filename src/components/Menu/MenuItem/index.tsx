import { Link, LinkProps, useMatch } from "react-router-dom";
import { cn } from "../../../lib/cn";
import { IconType } from "react-icons/lib";
interface MenuItemProps extends LinkProps {
    icon: IconType;
    text: string;
    altText: string;
}

const ACTIVE_BG = "transition duration-100 bg-neutral-700 rounded-full shadow-lg";

export function MenuItem({ text, icon: Icon, altText, to, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString())

    return (
        <div className={cn("flex item-center justify-center p-2", { [ACTIVE_BG]: isActive })}>
            <Link {...props} to={to} className="">
                <Icon aria-label={altText} className="h-auto w-8" />
            </Link>
        </div>
    );
}