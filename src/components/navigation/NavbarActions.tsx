import NavItem from "./NavItem"
import { NavItemType } from "./Types"

interface Prop {
    navItems: NavItemType[];
}

export default function NavbarActions({ navItems }: Prop) {
    return (
        <div>
            <ul id="action-navbar" className="hidden lg:flex flex-row gap-8 w-fit mx-4">
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