import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { OnChangeValue } from 'react-select';
import { CustomMenuList } from "../../constants/searchBar.constants";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { usePokedex } from "../../hooks/usePokedex";
import { useSearchSugestions } from "../../hooks/useSearchSugestions";
import { RootState } from "../../store";
import { resetSearchSugestionsState, setSearchList, setValue, sugestionsItemProps } from "../../store/reducers/searchPokedex";
import { IntroAreaSearchButton } from "./IntroAreaSearchButton";

export function IntroAreaSearchBar() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.searchPokedex.searchInputValue);
    const sugestionsList = useSelector((state: RootState) => state.searchPokedex.sugestionsList);
    const debouncedSearchValue = useDebouncedValue(searchValue, 400);
    const { handleSugestionsList } = useSearchSugestions();
    const { getPokemonPage } = usePokedex();

    const handleSearchList = (targets: OnChangeValue<sugestionsItemProps, true>) => {
        const labels = targets.map(target => target.label);

        if (labels.length === 0) {
            dispatch(setSearchList([]));
            getPokemonPage();
        } else {
            dispatch(setSearchList(labels));
            dispatch(resetSearchSugestionsState());
        }
    };

    useEffect(() => {
        if (debouncedSearchValue) {
            handleSugestionsList(debouncedSearchValue);
        }
    }, [debouncedSearchValue, handleSugestionsList]);

    return (
        <div className="flex items-center justify-between lg:justify-end gap-3 w-full lg:w-[50%] h-[2.4rem] mt-1 xsm:mt-2 md:mt-3">
            <Select
                isMulti
                options={sugestionsList[0] ? sugestionsList : []}
                placeholder="Digite o nome do Pokémon"
                onInputChange={(e) => { dispatch(setValue(e)) }}
                onChange={handleSearchList}
                delimiter="3"
                components={{ MenuList: CustomMenuList }}
                noOptionsMessage={() => null}
                className="text-xs md:text-sm lg:text-xs w-full lg:w-[85%] h-full overflow-y-hidden"
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

            <IntroAreaSearchButton />
        </div>
    )
}