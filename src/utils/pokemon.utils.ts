const SVG_PATH = "./src/assets/typesIcons/";

export function getPokemonTypeSVG(type: string) {
    return SVG_PATH + type + ".svg";
}

export function upperFirstLetter(type: string) {
    return type.charAt(0).toLocaleUpperCase() + type.slice(1);
}