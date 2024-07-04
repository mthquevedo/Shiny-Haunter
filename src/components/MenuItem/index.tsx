import { Link } from "react-router-dom";

interface MenuItemProps {
    icon: string;
    text: string;
    altText: string;
    to: string;
}

export function MenuItem({ text, icon, altText, to }: MenuItemProps) {
    return (
        <Link to={to} className="flex items-center gap-2">
            <img src={icon} alt={altText} className="h-auto w-9" />
            <p className="pt-3">{text}</p>
        </Link>
    );
}