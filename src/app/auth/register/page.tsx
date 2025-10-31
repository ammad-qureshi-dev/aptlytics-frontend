'use client';

import PrimaryButton from "@/components/buttons/PrimaryButton";
import ActionsContainer from "@/components/containers/ActionsContainer";
import NavLinksContainer from "@/components/containers/NavLinksContainer";
import FormContainer from "@/components/forms/FormContainer";
import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm"
import { RegisterRequest } from "@/components/forms/Types";
import { NavItemType } from "@/components/navigation/Types"
import NavigationLinks from "@/components/navigation2/NavigationLinks";
import { NavbarItem } from "@/components/navigation2/Types";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { AuthController } from "@/server/controllers/AuthController"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CLIENT_PATHS } from "@/routes/ClientPaths";

const ACTION_LINKS: NavbarItem[] = [
    {
        href: CLIENT_PATHS.auth.login,
        label: "Have an account?",
    }
]

export default function Register() {
    const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({ email: "", password: "", fullName: "", phoneNumber: "" });
    const router = useRouter();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await AuthController.register(registerRequest);

        if (response.success && response.data) {
            router.push(CLIENT_PATHS.auth.verifyAccount)
        }
    }

    return (
        <>
            <PageContainer width="lg:w-1/3 md:w-2/3 sm:w-full" css="mt-8">
                <PageHeader title="Join us today 🎉" />
                <PageContentContainer>
                    <FormContainer onSubmitFn={onSubmit}>
                        <GridComponent cols={2} gap={24}>
                            <FormInput input={{
                                label: "Full Name",
                                inputType: "text",
                                placeHolder: "Peter Parker",
                                value: registerRequest.fullName,
                                isRequired: true,
                                onValueChange: (value) => setRegisterRequest(prev => ({ ...prev, fullName: value })),
                            }} />
                            <FormInput input={{
                                label: "Phone",
                                inputType: "text",
                                placeHolder: "xxx-xxx-xxxx",
                                value: registerRequest.phoneNumber,
                                isRequired: false,
                                onValueChange: (value) => setRegisterRequest(prev => ({ ...prev, phoneNumber: value })),
                            }} />
                            <FormInput input={{
                                label: "Email",
                                inputType: "email",
                                placeHolder: "peter_parker@dailybugle.com",
                                value: registerRequest.email,
                                isRequired: false,
                                onValueChange: (value) => setRegisterRequest(prev => ({ ...prev, email: value })),
                            }} />
                            <FormInput input={{
                                label: "Password",
                                inputType: "password",
                                placeHolder: "super-secret-password",
                                value: registerRequest.password,
                                isRequired: true,
                                onValueChange: (value) => setRegisterRequest(prev => ({ ...prev, password: value })),
                            }} />
                        </GridComponent>
                        <PrimaryButton label="Register" type="submit" icon="user-round-plus" isFullWidth />
                    </FormContainer>
                    <ActionsContainer>
                        <NavigationLinks items={ACTION_LINKS} />
                    </ActionsContainer>
                </PageContentContainer>
            </PageContainer>
        </>
    )
}
