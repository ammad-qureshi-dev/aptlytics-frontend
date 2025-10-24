"use client";

import DisplayCardContainer from "@/components/cards/DisplayCardContainer";
import { PageCardType } from "@/components/cards/Types";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { UserController } from "@/server/controllers/UserController";
import { User } from "@/stores/Types";
import { useUserStore } from "@/stores/UserStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
    const router = useRouter();
    const cachedUser = useUserStore((state) => state.user);

    const { data, isLoading, error } = useQuery<User>({
        queryKey: ["user"],
        queryFn: UserController.getMe,
        enabled: cachedUser === undefined,
        retry: false,
    });

    const user = cachedUser || data;

    useEffect(() => {
        if (!isLoading && user === null) {
            router.push("/auth/login?redirect=/getting-started/business-registration");
        }
    }, [isLoading, user, router]);

    if (isLoading) return <div>Loading...</div>;
    if (!user) return <div>Error, please check logs</div>;

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