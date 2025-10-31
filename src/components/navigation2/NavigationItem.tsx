import Link from "next/link";
import { NavbarItem } from "./Types"
import { DynamicIcon } from "lucide-react/dynamic";
import { it } from "node:test";

interface Prop {
    item: NavbarItem;
}

export default function NavigationItem({ item }: Prop) {
    return (
        <>
            <Link
                href={item.href}
                className={`
                    h-full
                    ${item.icon && !item.label ? "w-8" : "w-fit"}
                    flex flex-row
                    items-center
                    justify-center
                    font-medium
                    transition-all
                    mx-1
                    cursor-pointer
                    border-b-2 border-transparent
                    hover:text-[#FF7B00]
                    ${item.icon ? "" : "hover:border-[#FF7B00]"}
                `}
            >
                <div className="w-fit flex flex-row items-center justify-center gap-2">
                    {GetItem(item)}
                </div>
            </Link>
        </>
    )
}

function GetItem(item: NavbarItem) {
    if (item.label && item.icon) {
        return (
            <>
                <DynamicIcon name={item.icon} size={22} strokeWidth={2.25} />
                <span>{item.label}</span>
            </>
        )
    }

    if (item.label) {
        return (
            <>
                <span>{item.label}</span>
            </>
        )
    }

    if (item.icon) {
        return (
            <>
                <DynamicIcon name={item.icon} size={22} strokeWidth={2.25} />
            </>
        )
    }
}