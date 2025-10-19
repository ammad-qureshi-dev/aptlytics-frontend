// 'use client';

import { DynamicIcon } from "lucide-react/dynamic";
import { DefaultIconName, NavItemType } from "../navigation/Types";
import Link from "next/link";

interface LinkButtonProp {
    item: NavItemType
}

export default function LinkButton({ item }: LinkButtonProp) {

    if (item.icon) {
        return (
            <Link href={item.href} className={`flex flex-row gap-2 w-32 h-12 bg-[#FF7B00] p-4 mx-4 justify-center rounded-md text-white font-bold transition-all items-center cursor-pointer`}>
                <DynamicIcon name={item.icon || DefaultIconName} className="" size={item.iconSize} />
                <span>{item.label}</span>
            </Link>
        )
    }

    return (
        <Link
            href={item.href}
            className={`
                w-36 h-12
                border
                py-2 px-4
                flex flex-row
                justify-center items-center gap-2
                rounded-md
                bg-[#FF7B00]
                border-[#FF7B00]
                text-white
                cursor-pointer
                transition-all
                hover:shadow-md
                hover:-translate-y-0.5
                hover:bg-[#f77700]
                active:-translate-y-1
                `}>
            {
                item.icon &&
                <DynamicIcon name={item.icon || DefaultIconName} className="" size={item.iconSize} />
            }
            <span className="text-xl font-medium">{item.label}</span>
        </Link>
    )
}