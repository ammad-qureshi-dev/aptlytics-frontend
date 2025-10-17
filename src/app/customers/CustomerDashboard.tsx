import DisplayCardContainer from "@/components/cards/DisplayCardContainer";
import { PageCardType } from "@/components/cards/Types";
import LinkButton from "@/components/common/LinkButton";
import CustomerSearch from "@/components/CustomerSearch";
import { NavItemType } from "@/components/navigation/Types";

export default function CustomerDashboard() {

    const cards: PageCardType[] = [
        {
            title: "Customers",
            icon: "layers",
            iconColor: "green",
            data: "102",
            type: "none",
            iconSize: 32
        },
        {
            title: "Growth",
            icon: "chart-area",
            iconColor: "yellow",
            data: "-24%",
            type: "none",
            iconSize: 32
        },
        {
            title: "Growth",
            icon: "chart-area",
            iconColor: "yellow",
            data: "-24%",
            type: "none",
            iconSize: 32
        }

    ]

    const addNewCustomerItem: NavItemType = {
        href: "/customers/add-customer-v2",
        label: "Add",
        icon: "user-plus"
    }

    return (
        <div id="page-actions"
            className={`flex flex-col lg:flex-row md:flex-col sm:flex-col
            gap-4 justify-between ${cards.length > 4 ? "items-start" : "items-center"}`}>
            <DisplayCardContainer cards={cards} />
            <div id="right-half" className="flex flew-row gap-4 w-full justify-end items-center lg:w-1/2 md:w-full sm:w-full">
                <CustomerSearch />
                <LinkButton item={addNewCustomerItem} />
            </div>
        </div>
    )
}