import { usePathname } from "next/navigation";
import NavigationLinks from "./NavigationLinks";
import { NavbarItem } from "./Types";
import { CLIENT_PATHS } from "@/routes/ClientPaths";

interface Prop {
    role: "OWNER" | "EMPLOYEE" | "CUSTOMER" | undefined;
}

export const ACCOUNT_NAVIGATION_LINKS: NavbarItem[] = [
    {
        href: CLIENT_PATHS.notifications.base,
        icon: "bell"
    },
    {
        href: CLIENT_PATHS.profile.base,
        icon: "user"
    }
]

export default function AccountNavbar({ role }: Prop) {

    const pathname = usePathname();

    const getAuthNavigationLinks = (): NavbarItem[] => {
        if (pathname.includes(CLIENT_PATHS.auth.login)) {
            return [
                {
                    label: "Register",
                    href: CLIENT_PATHS.auth.register,
                }
            ]
        }

        return [
            {
                label: "Login",
                href: CLIENT_PATHS.auth.login
            }
        ]
    }

    const getLinks = () => {
        switch (role) {
            case undefined: return getAuthNavigationLinks();
            default: return ACCOUNT_NAVIGATION_LINKS;
        }
    }

    return (
        <>
            <div id="account-navbar" className="w-full h-full">
                <NavigationLinks items={getLinks()} />
            </div>
        </>
    )
}