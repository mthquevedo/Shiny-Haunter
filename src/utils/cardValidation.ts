import { PokemonType } from "pokenode-ts";
import { defaultType, upperFirstLetter } from "./pokemon.utils";

export function idValidation(id: number) {
    return typeof id === "number" ? id : 0;
}

export function nameValidation(name: string) {
    const pokeName = upperFirstLetter(name);
    return pokeName ? pokeName : "???";
}

export function typeValidation(type: PokemonType[]) {
    const validType = type.length > 0 ? type : defaultType

    return validType;
}