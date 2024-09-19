import { ClassValue } from "clsx";

const SVG_PATH = "./src/assets/typesIcons/";

export function getPokemonTypeSVG(type: string) {
    return SVG_PATH + type + ".svg";
}

export function upperFirstLetter(type: string) {
    return type.charAt(0).toLocaleUpperCase() + type.slice(1);
}

export const typeColor: Record<string, ClassValue> = {
    dragon: "bg-dragon",
    electric: "bg-electric",
}

export const bannerTypeColor: Record<string, ClassValue> = {
    dragon: "bg-dragonback",
    electric: "bg-electricback",
}