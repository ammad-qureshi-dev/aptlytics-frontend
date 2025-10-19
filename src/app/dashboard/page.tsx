import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";

export default function Dashboard() {
    return (
        <PageContainer>
            <PageHeader title="Your Dasboard" subTitle="Check out what's happening!" />
            <PageContentContainer>
                <span>Hi</span>
            </PageContentContainer>
        </PageContainer>
    )
}