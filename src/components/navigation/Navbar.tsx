'use client';

import { Telescope } from "lucide-react";
import AccountNavbarActions from "./AccountNavbarActions";
import NavbarActions from "./NavbarActions";
import { userStore } from "@/stores/UserStore";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/stores/Types";
import { UserController } from "@/server/controllers/UserController";
import AuthenticateButton from "../buttons/AuthenticateButton";

export default function Navbar() {


    const fetchMe = async () => {
        const response = await UserController.getMe();
        if (response === undefined) {
            return null;
        }

        userStore.getState().setUserInContext(response);
        return response;
    }

    const { data, isLoading, isError, error, refetch } = useQuery<User>({
        queryKey: ["user"],
        queryFn: fetchMe
    });

    if (isLoading) {
        return (
            <div
                id="navbar"
                className="flex flex-row justify-between items-center border"
            >
                loading...
            </div>
        )
    }

    if (error) {
        return (
            <div
                id="navbar"
                className="flex flex-row justify-between items-center border"
            >
                error
            </div>
        )
    }

    if (data !== null) {
        return (
            <div
                id="navbar"
                className="flex flex-row justify-between items-center border border-gray-100 py-4 shadow-xs border-b-2"
            >
                <div className="flex flex-row">
                    <DefaultLogo />
                    <div className="border-l-2 border-gray-700 border hidden lg:flex flex-row gap-6 w-fit mx-4"></div>
                    <NavbarActions />
                </div>
                <AccountNavbarActions />
            </div>
        )
    } else {
        return (
            <div
                id="navbar"
                className="flex flex-row justify-between items-center border border-gray-100 py-4 shadow-xs border-b-2"
            >
                <DefaultLogo />
                <AuthenticateButton />
            </div>
        )
    }
}

function DefaultLogo() {
    return (
        <div
            id="default-logo"
            className="flex flex-row gap-4 items-center mx-4 px-4"
        >
            <Telescope size={32} />
            <span className="text-xl font-semibold">Aptlytics</span>
        </div>
    );
}
