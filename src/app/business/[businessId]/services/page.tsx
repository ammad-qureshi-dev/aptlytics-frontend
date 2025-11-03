"use client";

import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import ServiceAddForm from "./ServiceAddForm";

export default function Services() {
    return (
        <PageContainer requireUnload>
            <PageHeader
                title="Adding Business Services"
                subTitle="Add some services that your business provides"
            />
            <PageContentContainer>
                <ServiceAddForm />
            </PageContentContainer>
        </PageContainer>
    );
}
