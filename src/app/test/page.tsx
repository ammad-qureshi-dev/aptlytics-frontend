'use client'

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import PageContainer from "@/components/page/PageContainer";
import ProfileSwitcher from "@/components/profile/ProfileSwitcher";

export default function TestPage() {

    const onClick = () => {
        console.log("clicked");
    }

    return (
        <PageContainer>
            <ProfileSwitcher />
        </PageContainer>
    )
}