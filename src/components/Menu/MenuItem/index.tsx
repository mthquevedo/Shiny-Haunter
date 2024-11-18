import { Link, LinkProps, useMatch } from "react-router-dom";
import { cn } from "../../../lib/cn";
import { IconType } from "react-icons/lib";
import { MenuTooltip } from "../../Tooltips/MenuTooltip";
interface MenuItemProps extends LinkProps {
    icon: IconType;
    text: string;
    altText: string;
}

const ACTIVE_BG = "hover:bg-neutral-400/50 bg-neutral-400/50 shadow-lg";
const ACTIVE_ICON = "text-neutral-50";

export function MenuItem({ text, icon: Icon, altText, to, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString())

    return (
        <MenuTooltip content={text} side="right">
            <div className={cn("transition duration-100 rounded-lg flex item-center justify-center p-2 hover:bg-neutral-400/30  hover:shadow-lg", { [ACTIVE_BG]: isActive })}>
                <Link {...props} to={to} className="">
                    <Icon aria-label={altText} className={cn("h-auto w-7 text-neutral-400", { [ACTIVE_ICON]: isActive })} />
                </Link>
            </div>
        </MenuTooltip>
    );
}   