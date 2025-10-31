import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { NavbarItem } from "../navigation2/Types";

interface LinkButtonProp {
    item: NavbarItem;
}

export default function LinkButton({ item }: LinkButtonProp) {

    if (item.icon) {
        return (
            <Link href={item.href} className={`flex flex-row gap-2 w-32 h-8 border-2 border-[#FF7B00] justify-center rounded-md text-[#FF7B00] font-bold transition-all items-center cursor-pointer`}>
                {/* <DynamicIcon name={item.icon || DefaultIconName} className="" size={item.iconSize} /> */}
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
                <DynamicIcon name={item.icon} className="" size={item.iconSize} />
            }
            <span className="text-xl font-medium">{item.label}</span>
        </Link>
    )
}