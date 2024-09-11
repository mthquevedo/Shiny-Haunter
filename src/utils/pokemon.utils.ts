import { ElectricIcon } from "../components/TypeIcons/electric";

const SVG_PATH = "./src/assets/typesIcons/";

export function getPokemonTypeSVG(type: string) {
    return SVG_PATH + type + ".svg";
}

export const pokemonTypes: Record<string, React.FC> = {
    electric: ElectricIcon,
}