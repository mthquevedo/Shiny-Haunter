import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Select, { components, MenuListProps, OnChangeValue } from 'react-select';
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { usePokedex } from "../../hooks/usePokedex";
import { useSearchSugestions } from "../../hooks/useSearchSugestions";
import { RootState } from "../../store";
import { resetSearchSugestionsState, setValue, sugestionsItemProps } from "../../store/reducers/searchSugetions";

export function SearchBar() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.searchSugestions.searchValue);
    const sugestionsList = useSelector((state: RootState) => state.searchSugestions.list);
    const debouncedSearchValue = useDebouncedValue(searchValue, 400);
    const { handleSugestionsList } = useSearchSugestions();
    const [searchList, setSearchList] = useState<string[]>([]);
    const { getSearchedPokemon } = usePokedex();

    const handleSearchList = (targets: OnChangeValue<sugestionsItemProps, true>) => {
        const labels = targets.map(target => target.label);
        setSearchList(labels);
        dispatch(resetSearchSugestionsState());
    };

    const CustomMenuList = (props: MenuListProps<sugestionsItemProps, true>) => {
        return (
            <components.MenuList {...props}>
                <div className="px-2">
                    {props.children}
                </div>
            </components.MenuList>
        );
    };

    useEffect(() => {
        if (debouncedSearchValue) {
            handleSugestionsList(debouncedSearchValue);
        }
    }, [debouncedSearchValue, handleSugestionsList]);

    return (
        <div className="flex items-center gap-4">
            <Select
                isMulti
                options={sugestionsList[0] ? sugestionsList : []}
                placeholder="Busque pelo nome do pokémon"
                onInputChange={(e) => { dispatch(setValue(e)) }}
                onChange={handleSearchList}
                components={{ MenuList: CustomMenuList }}
                noOptionsMessage={() => null}
                className="text-sm w-25v h-full overflow-y-hidden"
                menuPortalTarget={document.body}
                menuPosition="fixed"
                styles={{
                    control: (base) => ({
                        ...base,
                        cursor: "text",
                        border: "1px solid #aaaaaa",
                        borderRadius: "0.5rem",
                        boxShadow: "none",
                        transition: "none",
                        "&:hover": {
                            borderColor: "#aaaaaa",
                        },
                    }),
                    menuPortal: (base) => ({
                        ...base,
                        fontSize: 14,
                        zIndex: 9999,
                    }),
                    menu: (base) => ({
                        ...base,
                        paddingTop: "4px",
                        marginTop: 6,
                    }),
                }}

            />

            <button
                className="flex items-center justify-center w-10 h-10 bg-primary shadow-sm rounded-lg"
                onClick={() => getSearchedPokemon(searchList)}
            >
                <IoMdSearch className="text-white text-2xl" />
            </button>
        </div>
    )
}