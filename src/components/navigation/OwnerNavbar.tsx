import NavbarActions from "./NavbarActions"
import { NavItemType } from "./Types"

const navItems: NavItemType[] = [
    {
        href: "/appointments",
        label: "Appointments",
        icon: "clipboard-clock"
    },
    {
        href: "/business",
        label: "Business",
        icon: "store"
    },
    {
        href: "/customers",
        label: "Customers",
        icon: "users-round"
    },
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: "layout-dashboard",
    },
    {
        href: "/team",
        label: "Team",
        icon: "boxes",
    }
]

export default function OwnerNavbar() {
    return (
        <>
            <NavbarActions navItems={navItems} />
        </>
    )
}