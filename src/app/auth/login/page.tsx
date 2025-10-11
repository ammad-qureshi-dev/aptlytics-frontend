'use client';

import Button from "@/components/common/Button";
import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm"
import { LoginRequest } from "@/components/forms/Types";
import NavItem from "@/components/navigation/NavItem"
import { NavItemType } from "@/components/navigation/Types"
import { AuthController } from "@/server/controllers/AuthController";
import { UserController } from "@/server/controllers/UserController";
import { userStore } from "@/stores/UserStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({ email: "", password: "", loginMethod: "PHONE", phoneNumber: "", inputtedValue: "" });
    const router = useRouter();
    const queryClient = useQueryClient();

    const fetchMe = async () => {
        const response = await UserController.getMe();
        if (response !== undefined && response !== null) {
            userStore.getState().setUserInContext(response);
            return response;
        }
        return null;
    };

    const submitLoginRequest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const request = { ...loginRequest };
        if (request.inputtedValue.includes("@")) {
            request.loginMethod = "EMAIL";
            request.email = request.inputtedValue;
        } else {
            request.phoneNumber = request.inputtedValue;
        }

        const response = await AuthController.login(request);
        if (response.data !== null) {
            await new Promise((r) => setTimeout(r, 200));
            await fetchMe();
            queryClient.invalidateQueries({ queryKey: ["user"] });
            router.push("/auth/accounts");
        }
    }

    return (
        <div className="flex flex-col gap-4 m-auto mt-32 p-8 items-center justify-center border border-gray-100 shadow-md rounded-md bg-[#FBFBFB] lg:w-1/3 md:w-2/3 sm:w-full">
            <header className="flex flex-col gap-2 text-left w-full mx-4">
                <h1 className="text-xl font-bold">Welcome back 👋</h1>
            </header>
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
                        placeHolder: "super secret password",
                        value: loginRequest.password,
                        isRequired: true,
                        onValueChange: (value) => setLoginRequest(prev => ({ ...prev, password: value })),
                    }} />
                </GridComponent>
                <Button label="Login" type="submit" action="primary" icon="log-in" />
            </form>
            <ActionLinks />
        </div>
    )
}

function ActionLinks() {
    const actionLinks: NavItemType[] = [
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

    return (
        <>
            <footer className="w-full flex flex-col gap-4">
                <hr className="border-t-2 border-gray-200 mt-2" />
                <ul className="flex flex-row justify-between">
                    {
                        actionLinks.map((link, key) => {
                            return (
                                <li key={key}>
                                    <NavItem navItem={link} />
                                </li>
                            )
                        })
                    }
                </ul>
            </footer>
        </>
    )
}