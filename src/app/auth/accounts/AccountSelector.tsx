"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { EllipsisVertical, SquareArrowOutUpRight, User as UserIcon } from "lucide-react";
import Pill from "@/components/common/Pill";
import { UserController } from "@/server/controllers/UserController";

type UserProfile = {
    label: string;
    role: "CUSTOMER" | "EMPLOYEE" | "OWNER";
    contextId: string;
};

export default function AccountSelector() {
    const router = useRouter();

    const {
        data: profiles = [],
        isLoading,
        isError,
        error,
    } = useQuery<UserProfile[]>({
        queryKey: ["userProfiles"],
        queryFn: async () => {
            const response = await UserController.getUserProfiles();
            return response ?? [];
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    if (isLoading) return <div>Loading profiles...</div>;

    if (isError) {
        const err = error as Error;
        return <div className="text-red-600">Error loading profiles: {err.message}</div>;
    }

    return (
        <div className="w-full my-4">
            <div className="grid gap-4 sm:gap-6 md:gap-8 
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {profiles.map((profile) => (
                    <AccountCard key={profile.contextId} profile={profile} router={router} />
                ))}
            </div>

        </div>
    );
}

interface AccountCardProps {
    profile: UserProfile;
    router: ReturnType<typeof useRouter>;
}

function AccountCard({ profile, router }: AccountCardProps) {
    const color = getRoleColor(profile.role);

    const onSwitchProfile = async () => {
        const response = await UserController.switchProfile(profile.contextId, profile.role);
        if (response?.success) {
            router.push("/dashboard");
        }
    };

    return (
        <div
            className="
        flex w-full items-center justify-between p-5 gap-4 
        border border-gray-200 rounded-xl shadow-sm 
        hover:shadow-lg transform hover:-translate-y-1 
        transition-all duration-200 bg-white cursor-pointer
      "
            onClick={onSwitchProfile}
        >
            <div className="flex items-center gap-4" id="profile-icon">
                <div
                    className="
            flex items-center justify-center 
            w-16 h-16 rounded-full border-2 border-gray-300 
            bg-gray-50 text-gray-700
            hover:bg-gray-100 transition-colors duration-150
          "
                >
                    <UserIcon className="w-8 h-8" />
                </div>

                <div className="flex flex-col" id="profile-info">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-900">
                            {profile.label}
                        </span>
                        <SquareArrowOutUpRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <Pill text={profile.role === "CUSTOMER" ? "Personal" : profile.role} color={color} />
                </div>
            </div>
            <EllipsisVertical className="text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
    );
}

function getRoleColor(role: UserProfile["role"]) {
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
