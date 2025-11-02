"use client";

import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import ServiceAddForm from "./ServiceAddForm";
import { useParams } from "next/navigation";

export default function Services() {

    const params = useParams();
    const businessId = params.businessId as string;

    return (
        <PageContainer>
            <PageHeader
                title="Business Services"
                subTitle="Add some services that your business provides"
            />
            <PageContentContainer>
                <ServiceAddForm businessId={businessId} />
            </PageContentContainer>
        </PageContainer>
    );
}
