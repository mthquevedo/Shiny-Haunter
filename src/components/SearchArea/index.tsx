import { SearchBar } from "./searchBar";

interface SearchForm {
    title: string;
    description: string;
}

export function SearchArea({ title, description }: SearchForm) {
    return (
        <div className="flex items-end mt-3 justify-between w-full">
            <div>
                <p className="text-xl font-bold text-primary mb-1">{title}</p>
                <p className="text-darkgray">{description}</p>
            </div>

            <SearchBar />
        </div>
    );
}