import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeaader";
import PageActions from "./PageActions";

export default function Customers() {
    return (
        <PageContainer>
            <PageHeader title="Customers" subTitle="Maintain and manage your customers here!" />
            <PageActions />
        </PageContainer>
    )
}