import DisplayCard from "@/components/cards/DisplayCard";
import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";

export default function VerifyAccount() {
    return (
        <PageContainer css="mt-8">
            <PageHeader title="Verify Your Account" />

            <div className="flex flex-row w-1/2">
                <DisplayCard card={{ title: "", icon: "activity", type: "none", iconColor: "blue", data: "Phone" }} />
                <DisplayCard card={{ title: "", icon: "activity", type: "none", iconColor: "blue", data: "Phone" }} />
            </div>
        </PageContainer>
    )
}