import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import ProfileSwitcher from "@/components/profile/ProfileSwitcher";

export default function Accounts() {
    return (
        <PageContainer width="w-1/2">
            <PageHeader title="Accounts" subTitle="Here are the businesses you own and the jobs you work at. Select an account to continue." />
            <PageContentContainer>
                <span className="font-light">Last logged in as:</span>
                <ProfileSwitcher showLogout={false} showContinueButton />
            </PageContentContainer>
        </PageContainer>
    );
}