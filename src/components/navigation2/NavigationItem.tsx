import Link from "next/link";
import { NavbarItem } from "./Types"
import { DynamicIcon } from "lucide-react/dynamic";

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
                    ${item.icon ? "w-8" : "w-fit"}
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
                {
                    !item.icon &&
                    item.label &&
                    <span>{item.label}</span>
                }
                {
                    item.icon &&
                    <DynamicIcon name={item.icon} size={22} strokeWidth={2.25} />
                }
            </Link>
        </>
    )
}