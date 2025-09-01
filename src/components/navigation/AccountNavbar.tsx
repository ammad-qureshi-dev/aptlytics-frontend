'use effect';

import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import { NavItemType } from "./Types";
import HamburgerNavbar from "./HamburgerNavbar";
import { useState } from "react";

export default function AccountNavbar() {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>();
    const accountNavItems: NavItemType[] = [
        {
            href: "/notifications",
            label: "Notifications",
            icon: "bell"
        },
        {
            href: "/account",
            label: "Account",
            icon: "circle-user"
        }
    ];

    return (
        <div className="flex flex-row items-center gap-4 mx-4">
            <ul id="account-navbar" className="flex flex-row gap-8 w-fit px-4">
                {
                    accountNavItems.map((item, key) => {
                        return (
                            <li key={key}>
                                <NavItem navItem={item} key={key} />
                            </li>
                        )
                    })
                }
            </ul>
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