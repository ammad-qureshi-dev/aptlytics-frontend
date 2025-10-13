'use client'

import { UserProfile } from "@/server/controllers/Types";
import { UserController } from "@/server/controllers/UserController";
import { UserIcon, SquareArrowOutUpRight, EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import Pill from "../common/Pill";

interface AccountCardProps {
    profile: UserProfile;
}

export default function AccountCard({ profile }: AccountCardProps) {
    const router = useRouter();
    const color = getRoleColor(profile.role);

    const onSwitchProfile = async () => {
        const response = await UserController.switchProfile(profile.contextId, profile.role);
        if (response?.success) {
            router.push("/dashboard");
        }
    };

    return (
        <div
            id="account-card-container"
            className="
        flex w-full items-center justify-between p-4 gap-4 
        border border-gray-50 rounded-xl shadow-sm 
        hover:shadow-lg transform hover:-translate-y-1 
        transition-all duration-200 bg-white cursor-pointer
      "

        >
            <div className="flex items-center gap-4 w-full" id="">
                <div
                    id="profile-container"
                    className="flex items-center justify-center"
                >
                    <UserIcon className="w-12 h-12 border border-black rounded-full p-1 text-gray-600" />
                </div>

                <div className="flex flex-col gap-2 w-full" id="profile-info" onClick={onSwitchProfile}>
                    <div className="flex items-center gap-1 w-full hover:underline">
                        <span className="text-lg font-semibold text-gray-900">
                            {profile.label}
                        </span>
                        <SquareArrowOutUpRight className="w-4 h-4 text-gray-600" />
                    </div>
                    <Pill text={profile.role === "CUSTOMER" ? "Personal" : profile.role} color={color} />
                </div>
            </div>
            <EllipsisVertical className="text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
    );
}

function getRoleColor(role: string) {
    switch (role) {
        case "CUSTOMER":
            return "indigo";
        case "EMPLOYEE":
            return "green";
        case "OWNER":
            return "yellow";
        default:
            return "gray";
    }
}
