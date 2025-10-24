"use client";

import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { UserController } from "@/server/controllers/UserController";
import { User } from "@/stores/Types";
import { useUserStore } from "@/stores/UserStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function EmployeeRegistration() {
    const router = useRouter();
    const cachedUser = useUserStore((state) => state.user);

    const { data, isLoading, isError } = useQuery<User>({
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
    if (!user) return <div>Error</div>;

    return (
        <PageContainer>
            <PageHeader title="Add Your Employment" subTitle="Add your work schedule or appointments and get automated reminders" />
            <PageContentContainer>
                hi
            </PageContentContainer>
        </PageContainer>
    )
}