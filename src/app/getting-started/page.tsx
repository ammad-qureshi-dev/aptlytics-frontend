import DisplayCardContainer from "@/components/cards/DisplayCardContainer";
import { PageCardType } from "@/components/cards/Types";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";

const INFO_CARDS: PageCardType[] = [
    {
        title: "",
        icon: "briefcase-business",
        type: "none",
        iconColor: "blue",
        iconSize: undefined,
        data: "Business",
        extra: "Add your services, keep track of clients, automate CRM",
        redirectTo: "/getting-started/business-registration"
    },
    {
        title: "",
        icon: "id-card-lanyard",
        type: "none",
        iconColor: "green",
        iconSize: undefined,
        data: "Employment",
        extra: "Add your work schedules and view your income statements",
        redirectTo: "/getting-started/employee-registration"
    },
    {
        title: "",
        icon: "user",
        type: "none",
        iconColor: "purple",
        iconSize: undefined,
        data: "Personal",
        extra: "Book and track your upcoming appointments, view lots of services on the platform",
        redirectTo: "/profile"
    }
]

export default function GettingStarted() {
    return (
        <>
            <PageContainer>
                <PageHeader title="Getting Started 🌟" subTitle="Add your business or work to manage your appointments and services!" />
                <PageContentContainer>
                    <DisplayCardContainer cards={INFO_CARDS} />
                </PageContentContainer>
            </PageContainer>
        </>
    )
}