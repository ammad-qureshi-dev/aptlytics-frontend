import NavItem from "../navigation/NavItem";
import { NavItemType } from "../navigation/Types";

interface Prop {
    navLinks: NavItemType[];
    gap?: number;
}

export default function NavLinksContainer({ navLinks, gap = 4 }: Prop) {
    const remToPixels: number = gap * 4;

    return (
        <ul
            className="flex flex-row justify-between items-center"
            style={{ gap: `${remToPixels}px` }}
        >
            {navLinks.map((link, key) => (
                <li key={key}>
                    <NavItem navItem={link} />
                </li>
            ))}
        </ul>
    );
}
