"use client";

import { AuthController } from "@/server/controllers/AuthController";
import { useUserStore } from "@/stores/UserStore";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutOption() {

    const router = useRouter();
    const queryClient = useQueryClient();
    const userStore = useUserStore();

    const logout = async () => {
        await AuthController.logout();
        queryClient.invalidateQueries({ queryKey: ["user"] });
        userStore.clearUser();
        router.push("/auth/login");
    }

    return (
        <>
            <div
                id="profile-container"
                className="
                w-full
                flex flex-row
                py-2 px-4
                rounded-md
                items-center
                justify-between
                cursor-pointer
                hover:bg-gray-100"
                onClick={logout}
            >
                <div className="flex flex-row gap-4 items-center">
                    <LogOut size={32} />
                    <div id="profile-info-container" className="flex flex-col items-start gap-1">
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </>
    )
}