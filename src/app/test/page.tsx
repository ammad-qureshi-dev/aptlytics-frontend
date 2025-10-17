'use client'

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import PageContainer from "@/components/page/PageContainer";

export default function TestPage() {

    const onClick = () => {
        console.log("clicked");
    }

    return (
        <PageContainer>
            <div className="flex flex-row gap-4">
                <PrimaryButton label="Add" onClick={onClick} icon="user-plus" />
                <SecondaryButton label="Cancel" onClick={onClick} />
            </div>
        </PageContainer>
    )
}