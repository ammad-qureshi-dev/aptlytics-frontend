import NavbarActions from "./NavbarActions";
import { NavItemType } from "./Types"

const navItems: NavItemType[] = [
    {
        href: "/appointments",
        label: "Appointments",
        icon: "clipboard-clock"
    },
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: "layout-dashboard",
    },
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
];

export default function CustomerNavbar() {
    return (
        <>
            <NavbarActions navItems={navItems} />
        </>
    )
}