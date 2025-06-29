import { ClassValue } from "clsx";
import { PokemonType } from "pokenode-ts";

const SVG_PATH = "assets/typesIcons/";

export function getPokemonTypeSVG(type: string) {
    return SVG_PATH + type + ".svg";
}

export function formatIdBelowTen(id: number | undefined) {
    return id?.toString().padStart(2, "0");
}

export function upperFirstLetter(word: string) {
    if (word !== undefined) {
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }
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

export const defaultType: PokemonType[] = [{
    slot: 1,
    type: {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/"
    }
}]