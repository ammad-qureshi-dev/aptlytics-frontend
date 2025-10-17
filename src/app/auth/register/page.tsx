'use client';

import PrimaryButton from "@/components/buttons/PrimaryButton";
import ActionsContainer from "@/components/containers/ActionsContainer";
import NavLinksContainer from "@/components/containers/NavLinksContainer";
import FormHeader from "@/components/forms/FormHeader";
import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm"
import { RegisterRequest } from "@/components/forms/Types";
import NavItem from "@/components/navigation/NavItem"
import { NavItemType } from "@/components/navigation/Types"
import { AuthController } from "@/server/controllers/AuthController"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const ACTION_LINKS: NavItemType[] = [
    {
        href: "/auth/login",
        label: "Have an account?",
        icon: "log-in"
    }
]

export default function Register() {
    const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({ email: "", password: "", fullName: "", phoneNumber: "" });
    const router = useRouter();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await AuthController.register(registerRequest);

        if (response.success && response.data) {
            router.push("/dashboard")
        }
    }

    return (
        <div className="flex flex-col gap-4 m-auto mt-32 p-8 items-center justify-center border border-gray-100 shadow-md rounded-md bg-[#FBFBFB] lg:w-1/3 md:w-2/3 sm:w-full">
            <FormHeader title="Join us today 🎉" />
            <form className="w-full flex flex-col gap-8" onSubmit={(e) => { onSubmit(e) }}>
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
            </form>
            <ActionsContainer>
                <NavLinksContainer navLinks={ACTION_LINKS} />
            </ActionsContainer>
        </div>
    )
}
