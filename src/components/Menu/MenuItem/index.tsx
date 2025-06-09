import { IconType } from "react-icons/lib";
import { Link, LinkProps, useMatch } from "react-router-dom";
import { cn } from "../../../lib/cn";
interface MenuItemProps extends LinkProps {
    icon: IconType;
    text: string;
    altText: string;
    notification?: boolean;
}

const ACTIVE_BG = "hover:bg-neutral-400/30 bg-neutral-400/30 border-2 border-neutral-600 shadow-lg";
const ACTIVE_TEXT = "font-medium text-neutral-50";
const ACTIVE_ICON = "text-neutral-50";

export function MenuItem({ text, icon: Icon, altText, to, notification, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString());

    return (
        <Link {...props} to={to} className="md:w-full">
            {/* Menu inferior */}
            <div className="flex md:hidden flex-col items-center justify-center gap-px active:scale-95 transition duration-0 relative">
                <Icon aria-label={altText} className={cn("h-auto w-5 xsm:w-6 text-neutral-400", { [ACTIVE_ICON]: isActive })} />

                <span className={cn("text-[0.625rem] xsm:text-xs text-neutral-400 transition", { [ACTIVE_TEXT]: isActive })}>{text}</span>

                {notification && (
                    <span className="absolute -top-1 -right-1">
                        <span className="relative flex w-3 h-3">
                            <span className="animate-ping  absolute inline-flex h-full w-full rounded-full bg-menucyan opacity-75 duration-500" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-menucyan" />
                        </span>
                    </span>
                )}
            </div>

            {/* Menu lateral */}
            <div className={cn("hidden md:flex flex-col items-center justify-center gap-1 h-[3.75rem] py-1 lg:h-14 xl:h-[3.5rem] border-2 border-menuback hover:bg-neutral-400/30 hover:shadow-lg active:scale-95 transition duration-75 rounded-lg relative", { [ACTIVE_BG]: isActive })}>
                <Icon aria-label={altText} className={cn("h-auto w-[49%] lg:w-7 xl:w-6 text-neutral-400", { [ACTIVE_ICON]: isActive })} />

                <span className={cn("text-xs lg:text-[0.7rem] xl:text-[0.75rem] text-neutral-300 transition", { [ACTIVE_TEXT]: isActive })}>{text}</span>

                {notification && (
                    <span className="absolute -top-1 -right-1">
                        <span className="relative flex w-3 h-3">
                            <span className="animate-ping  absolute inline-flex h-full w-full rounded-full bg-menucyan opacity-75 duration-500" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-menucyan" />
                        </span>
                    </span>
                )}
            </div>
        </Link>
    );
}   