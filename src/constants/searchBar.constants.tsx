import { components, MenuListProps } from 'react-select';
import { sugestionsItemProps } from "../store/reducers/searchPokedex";

export const CustomMenuList = (props: MenuListProps<sugestionsItemProps, true>) => {
    return (
        <components.MenuList {...props} >
            <div className="px-2" >
                {props.children}
            </div>
        </components.MenuList>
    );
};