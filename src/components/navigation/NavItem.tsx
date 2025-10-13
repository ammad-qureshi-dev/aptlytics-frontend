'use client';

import Link from "next/link";
import { DEFAULT_ICON_SIZE, DefaultIconName, NavItemType } from "./Types";
import { DynamicIcon } from 'lucide-react/dynamic';
import { usePathname } from "next/navigation";

interface NavItemProp {
    navItem: NavItemType,
}

export default function NavItem({ navItem }: NavItemProp) {

    const HIDE_HREF_ICONS: string[] = ["/profile", "/notifications"]
    const pathname = usePathname();

    const isCurrentPath = () => {
        return pathname.includes(navItem.href);
    }

    return (
        <Link href={navItem.href} className={`flex flex-row gap-2 w-fit h-8 transition-all items-center ${isCurrentPath() ? "text-[#FF7B00]" : ""} hover:text-[#FF7B00]`}>
            <DynamicIcon name={navItem.icon || DefaultIconName} className="" size={navItem.iconSize || DEFAULT_ICON_SIZE} />
            {
                !HIDE_HREF_ICONS.includes(navItem.href) &&
                <span>{navItem.label}</span>
            }
        </Link>
    )
}

