"use client";

import SkeletonBox from "@/components/loading/SkeletonBox";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { BusinessController } from "@/server/controllers/BusinessController";
import { useUserStore } from "@/stores/UserStore";
import { useQuery } from "@tanstack/react-query";

export default function Business() {
    const businessId = useUserStore((state) => state.user?.contextId) as string;

    const fetchBusinessById = async () => {
        return await BusinessController.getBusinessById(businessId);
    }

    const { data, isLoading, isError, error } = useQuery<any>({
        queryKey: ["business"],
        queryFn: fetchBusinessById,
        refetchOnMount: "always",
        enabled: !!businessId
    });

    if (isLoading) {
        return <SkeletonBox width="w-full" height="h-full" />
    }

    if (isError) {
        return <span>Error: {JSON.stringify(error)}</span>
    }

    return (
        <PageContainer>
            <PageHeader title={data?.name} subTitle={data?.description} />
            <PageContentContainer>
                hi
                {/* dashboard showing revenue and number of customers and increases and decreases in profit */}
            </PageContentContainer>
        </PageContainer>
    )
}