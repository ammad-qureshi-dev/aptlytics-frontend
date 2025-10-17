// 'use client';

import { DynamicIcon } from "lucide-react/dynamic";
import { DefaultIconName, NavItemType } from "../navigation/Types";
import Link from "next/link";

interface LinkButtonProp {
    item: NavItemType
}

export default function LinkButton({ item }: LinkButtonProp) {
    return (
        <Link href={item.href} className={`flex flex-row gap-2 w-32 h-12 bg-[#FF7B00] p-4 mx-4 justify-center rounded-md text-white font-bold transition-all items-center cursor-pointer`}>
            <DynamicIcon name={item.icon || DefaultIconName} className="" size={item.iconSize} />
            <span>{item.label}</span>
        </Link>
    )
}