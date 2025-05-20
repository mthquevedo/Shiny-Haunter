import { TypeFlag } from "../TypeFlag";
interface TypeShelfProps {
  types: {
    slot: number;
    type: { name: string };
  }[];
}

export function TypeShelf({ types }: TypeShelfProps) {
    return (
        <div className="bg-white rounded-full p-1 flex items-center justify-center gap-1 shadow-md">
            {types?.map(type => <TypeFlag key={type.slot} type={type.type.name} />)}
        </div>
    );
}