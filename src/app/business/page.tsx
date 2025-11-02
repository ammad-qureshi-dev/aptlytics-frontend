"use client";

import SkeletonBox from "@/components/loading/SkeletonBox";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { BusinessController } from "@/server/controllers/BusinessController";
import { useUserStore } from "@/stores/UserStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Business() {
    const businessId = useUserStore.getState().user?.contextId as string;

    const fetchBusinessById = async () => {
        return await BusinessController.getBusinessById(businessId);
    }

    const { data, isLoading, isError, error } = useQuery<any>({
        queryKey: ["business"],
        queryFn: fetchBusinessById,
        refetchOnMount: "always"
    });

    if (isLoading) {
        return <SkeletonBox width="w-full" height="h-full" />
    }

    if (isError) {
        return <span>Error: {JSON.stringify(error)}</span>
    }

    return (
        <PageContainer>
            {/* ToDo: Fetch business name and replace title with name*/}
            <PageHeader title={data.name} subTitle={data.description} />
            <PageContentContainer>
                hi
            </PageContentContainer>
        </PageContainer>
    )
}