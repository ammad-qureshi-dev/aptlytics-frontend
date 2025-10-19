import NavbarActions from "./NavbarActions"
import { NavItemType } from "./Types"

const navItems: NavItemType[] = [
    {
        href: "/appointments",
        label: "Appointments",
        icon: "clipboard-clock"
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
    }
]

export default function EmployeeNavbar() {
    return (
        <>
            <NavbarActions navItems={navItems} />
        </>
    )
}