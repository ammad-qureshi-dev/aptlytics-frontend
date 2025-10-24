"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { AuthController } from "@/server/controllers/AuthController";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function VerifyAccount() {

    const router = useRouter();
    const path = usePathname();

    const verify = async () => {
        const userId = path.substring(path.lastIndexOf("/") + 1);
        const response = await AuthController.verifyAccount(userId);

        if (response.data && response.success) {
            toast.success("Account Verified");
        } else {
            toast.error("Something went wrong with verifying")
        }
        setTimeout(() => {
            router.push("/dashboard");
        }, 1000);
    }

    return (
        <PageContainer>
            <PageHeader title="Account Verification" subTitle="Please verify your account" />
            <PageContentContainer>
                <PrimaryButton label="Verify" type="button" onClick={verify} icon="shield-check" />
            </PageContentContainer>
        </PageContainer>
    )
}