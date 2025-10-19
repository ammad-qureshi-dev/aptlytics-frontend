import { usePathname } from "next/navigation";
import LinkButton from "./LinkButton";
import { NavItemType } from "../navigation/Types";

export default function AuthenticateButton() {

    const pathname = usePathname();

    let navItem: NavItemType = {
        href: "/auth/login",
        label: "Login",
        icon: "lock",
    };

    if (pathname.includes("login")) {
        navItem = {
            href: "/auth/register",
            label: "Register",
            icon: "user-round-plus",
        };
    }

    return <LinkButton item={navItem} />;
}