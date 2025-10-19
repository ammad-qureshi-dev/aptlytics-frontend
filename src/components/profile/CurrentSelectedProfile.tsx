import { UserProfile } from "@/server/controllers/Types";
import { getRoleColor } from "@/utils/IconUtils";
import { ChevronsUpDown } from "lucide-react";
import Pill from "../common/Pill";

interface ProfileProp {
    profile?: UserProfile;
    onClick?: (val: any) => void;
    showProfiles?: boolean;
}

export default function CurrentSelectedProfile({ profile, onClick, showProfiles }: ProfileProp) {
    if (!profile) {
        return null;
    }

    return (
        <>
            <div
                id="profile-container"
                className="
                flex flex-row
                py-2 px-4
                bg-white
                rounded-md
                items-center
                justify-between
                cursor-pointer
                shadow-sm
                border-1
                border-gray-50"
                onClick={onClick ? () => onClick(!showProfiles) : undefined}
            >
                <div className="flex flex-row items-center gap-4 w-full">

                    <div id="profile-img-container" className="w-8 h-8 bg-gray-300 rounded-md">

                    </div>

                    <div id="profile-info-container" className="flex flex-col gap-1">
                        <span>{profile.label}</span>
                        <Pill color={getRoleColor(profile.role)} text={profile.role === "CUSTOMER" ? "Personal" : profile.role} icon={"info"} />
                    </div>
                </div>

                <ChevronsUpDown size={18} />
            </div>
        </>
    )
}