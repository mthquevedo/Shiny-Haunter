import { Select } from "radix-ui";
import { useMemo } from "react";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineKeyboardArrowDown, MdOutlineQuestionMark } from "react-icons/md";
import { useHeader } from "./header.hook";

export function HeaderPage() {
    const {title, selectProps, currentSelectedValue, selectOptions} = useHeader();

    const selectOptionsComponent = useMemo(() => {
        return selectOptions.map((option, index) => (
            <>
            <Select.Item
                key={option.lang}
                value={option.lang}
                className="cursor-pointer text-neutral-700 focus:outline-none p-px rounded-sm hover:bg-neutral-100"
            >
                <Select.ItemText>
                    {option.label}
                </Select.ItemText>
                <Select.ItemIndicator />
            </Select.Item>
            {index < selectOptions.length - 1 && (
                <Select.Separator className="h-px my-1 bg-slate-300" />
            )}
            </>
            
        ));
    }, [selectOptions]);

    return (
        <header className="flex items-center justify-between h-[4%] mb-4 lg:mb-8 xl:mb-4 2xl:mb-8">
            <h1 className="text-primary font-bold text-xl md:text-2xl">
                {title}
            </h1>
            <div className="flex gap-2 md:gap-3 items-center justify-between h-7 md:h-9">
                <Select.Root {...selectProps}>
                    <Select.Trigger className="flex items-center justify-between gap-1 md:gap-2 text-darkgray bg-white text-[0.625rem] md:text-xs font-medium px-2 py-1 w-20 xsm:w-24 md:w-28 lg:w-32 h-full rounded-lg border-neutral-400 border focus:outline-none cursor-pointer">
                        <Select.Value>
                            {currentSelectedValue}
                        </Select.Value>
                        <Select.Icon>
                            <MdOutlineKeyboardArrowDown className="text-[0.625rem] xsm:text-lg md:text-xl" />
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content
                            position="popper"
                            className="overflow-hidden w-20 xsm:w-24 md:w-28 lg:w-32 bg-white shadow-md rounded-lg text-xs mt-1"
                        >
                            <Select.Viewport className="p-2">
                                <Select.Group >
                                    {selectOptionsComponent}
                                </Select.Group>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>

                <a href="https://github.com/mthquevedo/Shiny-Haunter/issues" target="_blank" className="flex lg:hidden items-center justify-center gap-2 bg-darkgray hover:bg-stone-700 rounded-lg w-7 md:w-9 h-full md:h-9 shadow">
                    <MdOutlineQuestionMark className="fill-white md:text-lg" />
                </a>

                <a href="https://github.com/mthquevedo/Shiny-Haunter/issues" target="_blank" className="hidden lg:flex items-center justify-center gap-2 w-[50%] bg-darkgray hover:bg-stone-700 rounded-lg px-4 py-1 h-9  shadow">
                    <p className="text-white text-xs font-medium">Sugestões?</p>
                    <IoLogoGithub className="fill-white w-6 h-6" />
                </a>
            </div>
        </header>
    );
}