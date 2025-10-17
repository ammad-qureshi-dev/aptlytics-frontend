import NavItem from "../navigation/NavItem";
import { NavItemType } from "../navigation/Types";

interface Prop {
    navLinks: NavItemType[];
}

export default function NavLinksContainer({ navLinks }: Prop) {
    return (
        <>
            <ul className="flex flex-row justify-between">
                {
                    navLinks.map((link, key) => {
                        return (
                            <li key={key}>
                                <NavItem navItem={link} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}