import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import CustomerDashboard from "./CustomerDashboard";

export default function Customers() {
    return (
        <PageContainer>
            <PageHeader title="Customers" subTitle="Maintain and manage your customers here!" />
            <CustomerDashboard />
        </PageContainer>
    )
}