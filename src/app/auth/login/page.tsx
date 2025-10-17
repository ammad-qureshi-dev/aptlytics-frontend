'use client';

import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm"
import { LoginRequest } from "@/components/forms/Types";
import NavItem from "@/components/navigation/NavItem"
import { NavItemType } from "@/components/navigation/Types"
import { AuthController } from "@/server/controllers/AuthController";
import { UserController } from "@/server/controllers/UserController";
import { useUserStore } from "@/stores/UserStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LoginRequest as Payload } from "@/server/controllers/Types";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import NavLinksContainer from "@/components/containers/NavLinksContainer";
import ActionsContainer from "@/components/containers/ActionsContainer";
import FormHeader from "@/components/forms/FormHeader";

const ACTION_LINKS: NavItemType[] = [
    {
        href: "/auth/register",
        label: "New Account?",
        icon: "user-round-plus"
    },
    {
        href: "/auth/password-reset",
        label: "Forgot Password?",
        icon: "square-asterisk"
    }
]

export default function Login() {
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({ email: undefined, password: undefined, loginMethod: "EMAIL", phoneNumber: undefined, inputtedValue: undefined });
    const router = useRouter();
    const queryClient = useQueryClient();

    const fetchMe = async () => {
        const response = await UserController.getMe();
        if (response !== undefined && response !== null) {
            useUserStore.getState().setUser(response);
            return response;
        }
        return null;
    };

    const submitLoginRequest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const request = { ...loginRequest };

        const payload: Payload = {
            "email": undefined,
            "phoneNumber": undefined,
            "loginMethod": undefined,
            "password": undefined
        }

        if (request?.inputtedValue?.includes("@")) {
            payload.loginMethod = "EMAIL"
            payload.email = request.inputtedValue;
        } else {
            payload.loginMethod = "PHONE";
            payload.phoneNumber = request.inputtedValue;
        }

        payload.password = request.password;

        const response = await AuthController.login(payload);

        if (response.data !== null) {
            const user = await fetchMe();
            queryClient.invalidateQueries({ queryKey: ["user"] });

            if (user.verified) {
                router.push("/auth/accounts");
                return;
            } else {
                router.push("/auth/verify-account")
                return;
            }
        }
    }

    return (
        <div className="flex flex-col gap-4 m-auto mt-32 p-8 items-center justify-center border border-gray-100 shadow-md rounded-md bg-[#FBFBFB] lg:w-1/3 md:w-2/3 sm:w-full">
            <FormHeader title="Welcome back 👋" />
            <form className="w-full flex flex-col gap-8" onSubmit={submitLoginRequest}>
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
            </form>
            <ActionsContainer>
                <NavLinksContainer navLinks={ACTION_LINKS} />
            </ActionsContainer>
        </div>
    )
}