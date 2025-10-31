import { usePathname } from "next/navigation";
import LinkButton from "./LinkButton";
import { NavbarItem } from "../navigation2/Types";

export default function AuthenticateButton() {

    const pathname = usePathname();

    let navItem: NavbarItem = {
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