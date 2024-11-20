import { ClassValue } from "clsx";

const SVG_PATH = "./src/assets/typesIcons/";

export function getPokemonTypeSVG(type: string) {
    return SVG_PATH + type + ".svg";
}

export function upperFirstLetter(type: string) {
    return type.charAt(0).toLocaleUpperCase() + type.slice(1);
}

export const typeColor: Record<string, ClassValue> = {
    bug: "bg-bug",
    dark: "bg-dark",
    dragon: "bg-dragon",
    electric: "bg-electric",
    fairy: "bg-fairy",
    fighting: "bg-fighting",
    fire: "bg-fire",
    flying: "bg-flying",
    ghost: "bg-ghost",
    grass: "bg-grass",
    ground: "bg-ground",
    ice: "bg-ice",
    normal: "bg-normal",
    poison: "bg-poison",
    psychic: "bg-psychic",
    rock: "bg-rock",
    steel: "bg-steel",
    water: "bg-water",
};

export const bannerTypeColor: Record<string, ClassValue> = {
    bug: "bg-bugback",
    dark: "bg-darkback",
    dragon: "bg-dragonback",
    electric: "bg-electricback",
    fairy: "bg-fairyback",
    fighting: "bg-fightingback",
    fire: "bg-fireback",
    flying: "bg-flyingback",
    ghost: "bg-ghostback",
    grass: "bg-grassback",
    ground: "bg-groundback",
    ice: "bg-iceback",
    normal: "bg-normalback",
    poison: "bg-poisonback",
    psychic: "bg-psychicback",
    rock: "bg-rockback",
    steel: "bg-steelback",
    water: "bg-waterback",
};