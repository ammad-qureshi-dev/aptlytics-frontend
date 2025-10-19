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
    }
];

export default function CustomerNavbar() {
    return (
        <>
            <NavbarActions navItems={navItems} />
        </>
    )
}