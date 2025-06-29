import { TypeFlag } from "../../TypeFlag";
interface TypeShelfProps {
  types: {
    slot: number;
    type: { name: string };
  }[];
}

export function TypeShelf({ types }: TypeShelfProps) {
  return (
    <div className="flex items-center justify-center bg-white rounded-full p-1 gap-1 shadow-md overflow-hidden">
      {types?.map(type => <TypeFlag key={type.slot} type={type.type.name} />)}
    </div>
  );
}