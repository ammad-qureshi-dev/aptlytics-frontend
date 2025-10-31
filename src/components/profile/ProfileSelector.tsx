import { UserProfile } from "@/server/controllers/Types";
import { UserController } from "@/server/controllers/UserController";
import { useQuery } from "@tanstack/react-query";
import Profile from "./Profile";
import SkeletonBox from "../loading/SkeletonBox";
import LogoutOption from "./LogoutOption";

interface Prop {
    contextId?: string
    children?: React.ReactNode
    refreshOnSelect: boolean;
}

export default function ProfileSelector({ contextId, refreshOnSelect, children }: Prop) {
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

    if (isLoading) return <SkeletonBox width="w-full" height="h-16" />;

    if (isError) {
        const err = error as Error;
        return <div className="text-red-600">Error loading profiles: {err.message}</div>;
    }

    return (
        <>
            <div
                id="profile-swticher"
                className="
                    flex flex-col
                    bg-white
                    rounded-md
                    border border-gray-50
                    shadow-sm
                    p-2
                    gap-2
                    min-h-fit
                    max-h-48
                    overflow-y-scroll
                "
            >
                {
                    profiles.map((profile, key) => {
                        return (
                            <Profile profile={profile} key={key} currentProfile={profile.contextId === contextId} refreshOnSelect={refreshOnSelect} />
                        )
                    })
                }

                {children}
            </div>
        </>
    )
}
