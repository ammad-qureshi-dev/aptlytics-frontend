'use effect';

import { Menu, X } from "lucide-react";
import { NavItemType } from "./Types";
import HamburgerNavbar from "./HamburgerNavbar";
import { useState } from "react";
import NavLinksContainer from "../containers/NavLinksContainer";

export default function AccountNavbarActions() {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>();
    const accountNavItems: NavItemType[] = [
        {
            href: "/notifications",
            label: "Notifications",
            icon: "bell"
        },
        {
            href: "/profile",
            label: "Profile",
            icon: "circle-user"
        }
    ];

    return (
        <div className="flex flex-row items-center gap-8 mx-8">
            <NavLinksContainer navLinks={accountNavItems} gap={8} />
            <div className="flex items-center lg:hidden">
                <button type="button" onClick={() => { setShowHamburgerMenu(!showHamburgerMenu) }} className="cursor-pointer">
                    {
                        showHamburgerMenu &&
                        <X />
                    }
                    {
                        !showHamburgerMenu &&
                        <Menu />
                    }
                    {
                        showHamburgerMenu &&
                        <HamburgerNavbar />
                    }
                </button>
            </div>
        </div>
    )
}