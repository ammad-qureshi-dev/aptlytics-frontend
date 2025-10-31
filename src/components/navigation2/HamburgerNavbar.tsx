import NavigationItem from "./NavigationItem";
import { NavbarItem } from "./Types";

export default function HamburgerNavbar() {
    const navItems: NavbarItem[] = [
        { href: "/appointments", label: "Appointments", icon: "clipboard-clock" },
        { href: "/business", label: "Business", icon: "store" },
        { href: "/customers", label: "Customers", icon: "users-round" },
        { href: "/dashboard", label: "Dashboard", icon: "layout-dashboard" },
        { href: "/team", label: "Team", icon: "boxes" },
    ];

    return (
        <div className="absolute top-14 right-4 bg-white shadow-lg rounded-xl p-4 z-50 border border-gray-200">
            <ul className="flex flex-col gap-4">
                {navItems.map((item, key) => (
                    <li key={key}>
                        <NavigationItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
