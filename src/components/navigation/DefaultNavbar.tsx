import NavbarActions from "./NavbarActions";
import { NavItemType } from "./Types";

const navItems: NavItemType[] = [
    {
        href: "/explore",
        label: "Explore",
        icon: "globe",
    }
]

export default function DefaultNavbar() {
    return (
        <>
            <NavbarActions navItems={navItems} />
        </>
    )
}