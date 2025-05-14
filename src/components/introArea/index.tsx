import { SearchBar } from "./searchBar";

interface SearchForm {
    title: string;
    description: string;
    hasSearch?: boolean;
}

export function IntroArea({ title, description, hasSearch }: SearchForm) {
    return (
        <div className="flex items-end mt-3 justify-between w-full">
            <div>
                <p className="text-xl font-bold text-primary mb-1">{title}</p>
                <p className="text-darkgray">{description}</p>
            </div>

            {hasSearch && (
                <SearchBar />
            )}
        </div>
    );
}