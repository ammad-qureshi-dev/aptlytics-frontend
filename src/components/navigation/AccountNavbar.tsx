import NavItem from "./NavItem";
import { NavItemType } from "./Types";

export default function AccountNavbar() {
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
        <div>
            <ul id="account-navbar" className="flex flex-row gap-4 w-fit px-4">
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
        </div>

    )
}