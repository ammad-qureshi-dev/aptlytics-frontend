import NavbarActions from "./NavbarActions";
import { NavItemType } from "./Types";

const navItems: NavItemType[] = [
    {
        href: "/explore",
        label: "Explore",
        icon: "globe",
    },
    {
        href: "/getting-started",
        label: "Get Started",
        icon: "chart-no-axes-combined",
    }
]

export default function DefaultNavbar() {
    return (
        <>
            <NavbarActions navItems={navItems} />
        </>
    )
}