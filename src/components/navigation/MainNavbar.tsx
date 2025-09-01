import NavItem from "./NavItem"
import { NavItemType } from "./Types"

export default function MainNavbar() {
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

    return (
        <div>
            <ul id="action-navbar" className="flex flex-row gap-4 w-fit">
                {
                    navItems.map((navItem, key) => {
                        return (
                            <li key={key}>
                                <NavItem navItem={navItem} key={key} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}