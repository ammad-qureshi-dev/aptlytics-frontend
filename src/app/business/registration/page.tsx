"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormContainer from "@/components/forms/FormContainer";
import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm";
import { RegisterBusinessRequest } from "@/components/forms/Types";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { CLIENT_PATHS } from "@/routes/ClientPaths";
import { BusinessController } from "@/server/controllers/BusinessController";
import { UserController } from "@/server/controllers/UserController";
import { useRoleStore } from "@/stores/RoleStore";
import { formatUrl } from "@/utils/StringUtils";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function BusinessRegistration() {

    const [registerRequest, setRegisterRequest] = useState<RegisterBusinessRequest>({ name: "", });

    const router = useRouter();
    const { setRole } = useRoleStore();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await BusinessController.register(registerRequest);
        if (response.success && response.data) {

            const businessId = response.data;
            await UserController.switchProfile(businessId, "OWNER");
            setRole("OWNER");

            toast.success("Business Created!");

            setTimeout(() => {
                router.push(formatUrl(CLIENT_PATHS.business.services, { businessId: businessId }));
            }, 500);

        } else {
            toast.error("Error");
            console.error(response);
        }
    }

    return (
        <>
            <PageContainer width="lg:w-1/3 md:w-2/3 sm:w-full" css="mt-8">
                <PageHeader title="Register Your Business" subTitle="Create your business and add your services" />
                <PageContentContainer>
                    <FormContainer onSubmitFn={onSubmit}>
                        <GridComponent cols={2} gap={24}>
                            <FormInput input={{
                                label: "Business Name",
                                inputType: "text",
                                placeHolder: "Name",
                                value: registerRequest.name,
                                isRequired: true,
                                onValueChange: (value: string) => setRegisterRequest(prev => ({ ...prev, name: value })),
                            }} />
                            <FormInput input={{
                                label: "What does your business do?",
                                inputType: "textarea",
                                placeHolder: "Description",
                                value: registerRequest.description,
                                isRequired: false,
                                onValueChange: (value: string) => setRegisterRequest(prev => ({ ...prev, description: value })),
                            }} />
                            <FormInput input={{
                                label: "Where's your business located?",
                                inputType: "text",
                                placeHolder: "Address",
                                value: registerRequest.address,
                                isRequired: false,
                                onValueChange: (value: string) => setRegisterRequest(prev => ({ ...prev, address: value })),
                            }} />
                            <FormInput input={{
                                label: "Best number to contact your business?",
                                inputType: "text",
                                placeHolder: "Phone-number",
                                value: registerRequest.phoneNumber,
                                isRequired: false,
                                onValueChange: (value: string) => setRegisterRequest(prev => ({ ...prev, phoneNumber: value })),
                            }} />
                            <FormInput input={{
                                label: "Who can I email?",
                                inputType: "email",
                                placeHolder: "Email",
                                value: registerRequest.email,
                                isRequired: false,
                                onValueChange: (value: string) => setRegisterRequest(prev => ({ ...prev, email: value })),
                            }} />
                        </GridComponent>
                        <PrimaryButton label="Create" type="submit" icon="plus" isFullWidth />
                    </FormContainer>
                </PageContentContainer>
            </PageContainer>
        </>
    )
}