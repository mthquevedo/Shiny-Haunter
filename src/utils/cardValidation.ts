import { PokemonType } from "pokenode-ts";
import { defaultType, upperFirstLetter } from "./pokemon.utils";

export function idValidation(id: number) {
    return typeof id === "number" ? id : 0;
}

export function nameValidation(name: string) {
    return name ? upperFirstLetter(name) : "???";
}

export function imageValidation(img: string | undefined | null) {
    return typeof img === "string" ? img : "src/assets/pokeball-icon-11.png";
}

export function typeValidation(type: PokemonType[] = []) {
    return type.length > 0 ? type : defaultType;
}