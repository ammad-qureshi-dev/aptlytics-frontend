'use client';

import JourneyContainer from "@/components/journey/JourneyContainer";
import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";

export default function AddCustomer() {
    return (
        <PageContainer>
            <PageHeader title="Add Customer" subTitle="Congrats on getting a new customer" icon="party-popper" iconColor="orange" />
            <JourneyContainer journeyName="AddCustomerJourneySteps" />
        </PageContainer>
    )
}