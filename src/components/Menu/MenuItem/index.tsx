import { Link, LinkProps, useMatch } from "react-router-dom";
import { cn } from "../../../lib/cn";
import { IconType } from "react-icons/lib";
import { MenuTooltip } from "../../Tooltips/MenuTooltip";
interface MenuItemProps extends LinkProps {
    icon: IconType;
    text: string;
    altText: string;
}

const ACTIVE_BG = "hover:bg-neutral-400/30 bg-neutral-400/30 border-2 border-neutral-600 shadow-lg";
const ACTIVE_ICON = "text-neutral-50";

export function MenuItem({ text, icon: Icon, altText, to, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString())

    return (
        <MenuTooltip content={text} side="right">
            <Link {...props} to={to}>
                <div className={cn("transition rounded-lg flex item-center justify-center p-2.5 border-2 border-menuback hover:bg-neutral-400/30 hover:shadow-lg active:scale-95", { [ACTIVE_BG]: isActive })}>
                    <Icon aria-label={altText} className={cn("h-auto w-6 text-neutral-400", { [ACTIVE_ICON]: isActive })} />
                </div>
            </Link>
        </MenuTooltip>
    );
}   