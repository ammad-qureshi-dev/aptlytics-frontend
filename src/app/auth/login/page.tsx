'use client';

import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm"
import { LoginRequest } from "@/components/forms/Types";
import { AuthController } from "@/server/controllers/AuthController";
import { UserController } from "@/server/controllers/UserController";
import { useUserStore } from "@/stores/UserStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { LoginRequest as Payload } from "@/server/controllers/Types";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ActionsContainer from "@/components/containers/ActionsContainer";
import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import PageContentContainer from "@/components/page/PageContentContainer";
import FormContainer from "@/components/forms/FormContainer";
import { useRoleStore } from "@/stores/RoleStore";
import { NavbarItem } from "@/components/navigation2/Types";
import { CLIENT_PATHS } from "@/routes/ClientPaths";
import NavigationLinks from "@/components/navigation2/NavigationLinks";

const ACTION_LINKS: NavbarItem[] = [
    {
        href: CLIENT_PATHS.auth.register,
        label: "New Account?",
    },
    {
        href: CLIENT_PATHS.auth.passwordReset,
        label: "Forgot Password?",
    }
];

export default function Login() {
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({ email: undefined, password: undefined, loginMethod: "EMAIL", phoneNumber: undefined, inputtedValue: undefined });
    const router = useRouter();
    const queryClient = useQueryClient();
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect");

    const getNextLink = (user: any) => {
        if (redirect) {
            return redirect;
        }

        if (user) {
            if (user!.verified) {
                return CLIENT_PATHS.auth.accounts;
            }

            return CLIENT_PATHS.auth.verifyAccount;
        }

        return "";
    }

    const fetchMe = async () => {
        const response = await UserController.getMe();
        if (response !== undefined && response !== null) {
            useUserStore.getState().setUser(response);
            useRoleStore.getState().setRole(response.lastSignedInAs || "CUSTOMER");
            return response;
        }
        return null;
    };

    const generatePayload = (): Payload => {
        const request = { ...loginRequest };

        const payload: Payload = {
            "email": undefined,
            "phoneNumber": undefined,
            "loginMethod": undefined,
            "password": request.password
        }

        if (request?.inputtedValue?.includes("@")) {
            payload.loginMethod = "EMAIL"
            payload.email = request.inputtedValue;
        } else {
            payload.loginMethod = "PHONE";
            payload.phoneNumber = request.inputtedValue;
        }

        return payload;
    }

    const submitLoginRequest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = generatePayload();
        const data = await AuthController.login(payload);

        if (data !== null) {
            const user = await fetchMe();
            queryClient.invalidateQueries({ queryKey: ["user"] });
            router.push(getNextLink(user));
        }
    }

    return (
        <>
            <PageContainer width="lg:w-1/3 md:w-2/3 sm:w-full" css="mt-8">
                <PageHeader title="Welcome Back 👋" />
                <PageContentContainer>
                    <FormContainer onSubmitFn={submitLoginRequest}>
                        <GridComponent cols={2} gap={24}>
                            <FormInput input={{
                                label: "Email/Phone",
                                inputType: "text",
                                placeHolder: "Enter your email or phone number",
                                value: loginRequest.inputtedValue,
                                isRequired: true,
                                onValueChange: (value) => setLoginRequest(prev => ({ ...prev, inputtedValue: value })),
                            }} />
                            <FormInput input={{
                                label: "Password",
                                inputType: "password",
                                placeHolder: "super-secret-password",
                                value: loginRequest.password,
                                isRequired: true,
                                onValueChange: (value) => setLoginRequest(prev => ({ ...prev, password: value })),
                            }} />
                        </GridComponent>
                        <PrimaryButton label="Login" type="submit" icon="log-in" isFullWidth />
                    </FormContainer>
                    <ActionsContainer>
                        <NavigationLinks items={ACTION_LINKS} />
                    </ActionsContainer>
                </PageContentContainer>
            </PageContainer>
        </>
    )
}