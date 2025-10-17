'use client';

import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "@/stores/UserStore";
import { UserController } from "@/server/controllers/UserController";
import { Telescope } from "lucide-react";
import AccountNavbarActions from "./AccountNavbarActions";
import NavbarActions from "./NavbarActions";
import AuthenticateButton from "../buttons/AuthenticateButton";

export default function Navbar() {
    const { user, setUser, clearUser } = useUserStore();

    useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                const response = await UserController.getMe();

                if (response === undefined) {
                    setUser(null);
                    return null;
                }

                setUser(response);
                return response ?? null;
            } catch (err: any) {
                if (err.response?.status === 401) {
                    clearUser();
                    return null;
                }
                throw err;
            }
        },
        enabled: user === undefined,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
    });

    return (
        <div className="flex flex-row justify-between items-center border border-gray-100 py-4 px-8 shadow-xs border-b-2">
            <div className="flex flex-row">
                <DefaultLogo />
                {user && <NavbarActions />}
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
