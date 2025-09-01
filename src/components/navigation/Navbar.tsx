'use client';

import Link from "next/link";
import { DefaultIconName, NavItemType } from "./Types"
import { DynamicIcon } from "lucide-react/dynamic";
import { Telescope } from "lucide-react";
import { usePathname } from "next/navigation";
import AccountNavbar from "./AccountNavbar";
import MainNavbar from "./MainNavbar";
import { userStore } from "@/stores/UserStore";

export default function Navbar() {
    const user = userStore((state) => state.user);
    const pathname = usePathname();

    // ToDo: revert back to !== after retrieving login
    if (user === null) {
        return (
            <div id="navbar" className="flex flex-row py-4 justify-between items-center shadow-xs border-b-2 border-b-gray-200">
                <div className="flex flex-row items-center gap-4">
                    <BusinessTitleHeader />
                    <MainNavbar />
                </div>
                <AccountNavbar />
            </div>
        )
    }

    return (
        <div id="navbar" className="flex flex-row py-4 justify-between items-center shadow-xs border-b-2 border-b-gray-200">
            <DefaultLogo />
            {LoginButton(pathname)}
        </div>
    )
}

function BusinessTitleHeader() {
    return (
        <div id="business-title-header" className="px-4  font-bold border-r-2 border-r-gray-300">
            Physiotherapy First
        </div>
    )
}

function LoginButton(pathname: string) {

    let navItem: NavItemType = {
        href: "/auth/login",
        label: "Login",
        icon: "lock"
    }

    if (pathname.includes("login")) {
        navItem = {
            href: "/auth/register",
            label: "Register",
            icon: "user-round-plus"
        }
    }

    return (
        <Link href={navItem.href} className={`flex flex-row gap-2 w-32 h-12 bg-[#FF7B00] p-4 mx-4 justify-center rounded-md text-white font-bold transition-all items-center`}>
            <DynamicIcon name={navItem.icon || DefaultIconName} className="" size={navItem.iconSize} />
            <span>{navItem.label}</span>
        </Link>
    )
}

function DefaultLogo() {
    return (
        <div id="default-logo" className="flex flex-row gap-4 items-center mx-4 px-4">
            <Telescope size={32} />
            <span className="text-xl font-bold underline">Aptlytics</span>
        </div>
    )
}