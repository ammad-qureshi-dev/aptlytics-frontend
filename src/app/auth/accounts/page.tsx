import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import AccountSelector from "./AccountSelector";

export default function Accounts() {
    return (
        <PageContainer>
            <PageHeader title="Accounts" subTitle="Here are the businesses you own and the jobs you work at. Select an account to continue." />
            <AccountSelector />
        </PageContainer>
    );
}