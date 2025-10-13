"use client";

import Button from "@/components/common/Button";
import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import { AuthController } from "@/server/controllers/AuthController";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function VerifyAccount() {

    const router = useRouter();
    const path = usePathname();

    const verify = async () => {
        const userId = path.substring(path.lastIndexOf("/") + 1);
        const response = await AuthController.verifyAccount(userId, "EMAIL");

        if (response.data && response.success) {
            toast.success("Account Verified");
        }

        setTimeout(() => {
            router.push("/dashboard");
        }, 1000);

    }

    return (
        <PageContainer>
            <PageHeader title="Account Verification" subTitle="Please verify your account" />
            <div className="my-4">
                <Button label="Verify" type="button" action="primary" onClick={verify} icon="shield-check" />
            </div>
        </PageContainer>
    )
}