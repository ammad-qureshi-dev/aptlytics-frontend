"use client";

import { UserProfile } from "@/server/controllers/Types";
import { UserController } from "@/server/controllers/UserController";
import { useQuery } from "@tanstack/react-query";
import CurrentSelectedProfile from "./CurrentSelectedProfile";
import SkeletonBox from "../common/SkeletonBox";
import ProfileSelector from "./ProfileSelector";
import { useState } from "react";
import LogoutOption from "./LogoutOption";
import LinkButton from "../buttons/LinkButton";
import PrimaryButton from "../buttons/PrimaryButton";

interface Prop {
    showLogout: boolean;
    showContinueButton: boolean;

    // FIXME: I don't like this
    refreshOnSelect: boolean;
}

export default function ProfileSwitcher({ showLogout, showContinueButton, refreshOnSelect }: Prop) {
    const [showProfiles, setShowProfiles] = useState<boolean>(false);
    const { data: currentProfile, isLoading, isError, error, refetch } = useQuery<UserProfile>({
        queryKey: ["currentProfile"],
        queryFn: UserController.getCurrentProfile
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
                gap-2
                w-full
                rounded-sm">
                <CurrentSelectedProfile profile={currentProfile} onClick={setShowProfiles} showProfiles={showProfiles} />
                {
                    showProfiles &&
                    <ProfileSelector contextId={currentProfile?.contextId} refreshOnSelect={refreshOnSelect}>
                        {
                            showLogout &&
                            <LogoutOption />
                        }
                    </ProfileSelector>
                }
                {
                    showContinueButton &&
                    <div className="flex flex-row items-end justify-end w-full my-4">
                        <LinkButton item={{
                            href: "/dashboard",
                            label: "Continue"
                        }} />
                    </div>
                }
            </div>
        </>
    )
}
