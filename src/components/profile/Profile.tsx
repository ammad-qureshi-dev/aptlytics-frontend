import { UserProfile } from "@/server/controllers/Types";
import { UserController } from "@/server/controllers/UserController";
import { useQueryClient } from "@tanstack/react-query";
import { CircleCheck } from "lucide-react";
import Pill from "../common/Pill";
import { getRoleColor } from "@/utils/IconUtils";
import { useRoleStore } from "@/stores/RoleStore";

interface ProfileProp {
    profile: UserProfile;
    currentProfile: boolean;
    refreshOnSelect: boolean;
}

export default function Profile({ profile, currentProfile, refreshOnSelect }: ProfileProp) {

    const queryClient = useQueryClient();
    const roleStore = useRoleStore();

    const selectProfile = async () => {
        await UserController.switchProfile(profile.contextId, profile.role);
        queryClient.invalidateQueries({ queryKey: ["currentProfile"] });
        queryClient.invalidateQueries({ queryKey: ["role"] });
        roleStore.setRole(profile.role);

        if (refreshOnSelect) {
            window.location.reload();
        }
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
                onClick={selectProfile}
            >
                <div className="flex flex-row gap-4 items-center">
                    <div id="profile-img-container" className="w-8 h-8 bg-gray-300 rounded-md">
                    </div>
                    <div id="profile-info-container" className="flex flex-col items-start gap-1">
                        <span>{profile.label}</span>
                        <Pill color={getRoleColor(profile.role)} text={profile.role === "CUSTOMER" ? "Personal" : profile.role} icon={"info"} />
                    </div>
                </div>
                {
                    currentProfile &&
                    <CircleCheck className="text-green-500" />
                }
            </div>
        </>
    )
}