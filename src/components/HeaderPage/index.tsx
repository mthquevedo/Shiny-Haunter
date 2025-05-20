import { Select } from "radix-ui";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function HeaderPage() {
    const [value, setValue] = useState("Idioma");

    return (
        <div className="flex gap-4 items-center justify-between">
            <div className="text-primary font-bold text-2xl">
                <p>Shiny Haunter</p>
            </div>
            <div className="flex gap-4 items-center justify-between">
                <Select.Root value={value} onValueChange={setValue}>
                    <Select.Trigger className="flex items-center justify-between gap-2 text-primary bg-white text-xs font-medium px-4 py-1 w-32 h-9 rounded-lg border-neutral-400 border focus:outline-none cursor-pointer">
                        <Select.Value>
                            {value}
                        </Select.Value>
                        <Select.Icon>
                            <MdOutlineKeyboardArrowDown className="text-xl" />
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content
                            position="popper"
                            className="overflow-hidden w-32 bg-white shadow-md rounded-lg text-sm mt-1"
                        >
                            <Select.Viewport className="p-2">
                                <Select.Group>
                                    <Select.Item value="Português" className="cursor-pointer text-neutral-700 focus:outline-none p-px rounded-sm hover:bg-neutral-100">
                                        <Select.ItemText>
                                            Português
                                        </Select.ItemText>
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                    <Select.Separator className="h-px my-1 bg-slate-300" />
                                    <Select.Item value="Inglês" disabled className="cursor-no-drop text-neutral-400">
                                        <Select.ItemText>
                                            Inglês
                                        </Select.ItemText>
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                    <Select.Separator className="h-px my-1 bg-slate-300" />
                                    <Select.Item value="Espanhol" disabled className="cursor-no-drop text-neutral-400">
                                        <Select.ItemText>
                                            Espanhol
                                        </Select.ItemText>
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                </Select.Group>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>

                <a href="https://github.com/mthquevedo/Shiny-Haunter/issues" target="_blank" className="bg-darkgray hover:bg-stone-700 rounded-lg px-4 py-1 h-9 flex items-center justify-center gap-2 shadow">
                    <p className="text-white text-xs font-medium">Sugestões?</p>
                    <IoLogoGithub className="fill-white w-6 h-6" />
                </a>
            </div>
        </div>
    );
}