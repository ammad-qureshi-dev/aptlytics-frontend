'use client'

import SkeletonBox from "@/components/loading/SkeletonBox";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";

export default function TestPage() {
    return (
        <PageContainer>
            <PageHeader title={"Sample Page"} />
            <PageContentContainer>
                <SkeletonBox width="w-full" height={"h-10"} />
            </PageContentContainer>
        </PageContainer>
    )
}