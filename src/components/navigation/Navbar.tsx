'use client';

import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/stores/UserStore";
import { UserController } from "@/server/controllers/UserController";
import { Telescope } from "lucide-react";
import AccountNavbarActions from "./AccountNavbarActions";
import NavbarActions from "./NavbarActions";
import AuthenticateButton from "../buttons/AuthenticateButton";

export default function Navbar() {
    const { user, setUserInContext } = userStore();

    useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            if (!user) {
                const response = await UserController.getMe();
                if (response) setUserInContext(response);
                return response;
            }
            return user;
        },
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    return (
        <div className="flex flex-row justify-between items-center border border-gray-100 py-4 shadow-xs border-b-2">
            <div className="flex flex-row">
                <DefaultLogo />
                {user && (
                    <>
                        <div className="border-l-2 border-gray-700 hidden lg:flex flex-row gap-6 w-fit mx-4"></div>
                        <NavbarActions />
                    </>
                )}
            </div>

            {user ? <AccountNavbarActions /> : <AuthenticateButton />}
        </div>
    );
}

function DefaultLogo() {
    return (
        <div className="flex flex-row gap-4 items-center mx-4">
            <Telescope size={32} className="text-[#FF7B00]" />
            <span className="text-xl font-semibold text-[#FF7B00]">Aptlytics</span>
        </div>
    );
}
