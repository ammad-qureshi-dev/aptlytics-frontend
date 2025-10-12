"use client";

import { useQuery } from "@tanstack/react-query";
import { UserController } from "@/server/controllers/UserController";
import { UserProfile } from "@/server/controllers/Types";
import AccountCard from "@/components/cards/AccountCard";

export default function AccountSelector() {

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
            <div className="flex flex-col gap-4">
                {profiles.map((profile) => (
                    <AccountCard key={profile.contextId} profile={profile} />
                ))}
            </div>

        </div>
    );
}