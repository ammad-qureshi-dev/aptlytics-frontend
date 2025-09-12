'use client';

import Button from "@/components/common/Button";
import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm"
import { LoginRequest, RegisterRequest } from "@/components/forms/Types";
import NavItem from "@/components/navigation/NavItem"
import { NavItemType } from "@/components/navigation/Types"
import { useState } from "react";

export default function Register() {
    const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({ email: "", password: "", fullName: "", phoneNumber: "" });

    return (
        <div className="flex flex-col gap-4 m-auto mt-32 p-8 items-center justify-center border border-gray-100 shadow-md rounded-md bg-[#FBFBFB] lg:w-1/3 md:w-2/3 sm:w-full">
            <Header />
            <form className="w-full flex flex-col gap-8">
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
                        value: registerRequest.password,
                        isRequired: false,
                        onValueChange: (value) => setRegisterRequest(prev => ({ ...prev, password: value })),
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
                <Button label="Register" type="submit" action="primary" icon="user-round-plus" />
            </form>
            <ActionLinks />
        </div>
    )
}

function Header() {
    return (
        <>
            <header className="flex flex-col gap-2 text-left w-full mx-4">
                <h1 className="text-xl font-bold">Join us today 🎉</h1>
            </header>
        </>
    )
}

function ActionLinks() {
    const actionLinks: NavItemType[] = [
        {
            href: "/auth/login",
            label: "Have an account?",
            icon: "log-in"
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