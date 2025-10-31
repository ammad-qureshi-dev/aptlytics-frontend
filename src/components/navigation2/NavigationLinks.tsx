import NavigationItem from "./NavigationItem";
import { NavbarItem } from "./Types";

interface Prop {
    items: NavbarItem[];
}

export default function NavLinks({ items }: Prop) {
    return (
        <>
            <ul className="w-full h-full flex-row gap-4 items-center justify-between whitespace-nowrap hidden lg:flex">
                {
                    items.map((item, key) => {
                        return (
                            <li key={key} className="w-fit">
                                <NavigationItem item={item} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}