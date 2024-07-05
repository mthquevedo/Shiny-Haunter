import { Link, LinkProps, useMatch } from "react-router-dom";
interface MenuItemProps extends LinkProps {
    icon: string;
    text: string;
    altText: string;
}

export function MenuItem({ text, icon, altText, to, ...props }: MenuItemProps) {
    const isActive = useMatch(to.toString())
    const activeTextColor = "text-menucyan font-bold"
    const textStyle = isActive ? activeTextColor : ""

    return (
        <Link {...props} to={to} className="flex items-center gap-2">
            <img src={icon} alt={altText} className="h-auto w-9" />
            <p className={textStyle + " pt-3"}>{text}</p>
        </Link>
    );
}