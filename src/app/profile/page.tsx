"use client";

import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import { UserController } from "@/server/controllers/UserController";
import { User } from "@/stores/Types";
import { useQuery } from "@tanstack/react-query";
import ProfileSwitcher from "@/components/profile/ProfileSwitcher";
import SkeletonBox from "@/components/common/SkeletonBox";
import PageContentContainer from "@/components/page/PageContentContainer";

export default function Profile() {
    const fetchMe = async () => {
        const response = await UserController.getMe();
        return response;
    }

    const { data, isLoading, isError, error } = useQuery<User>({
        queryKey: ["user"],
        queryFn: fetchMe
    });

    if (isLoading) return <SkeletonBox width="w-full" height="w-full" />;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <PageContainer>
            <PageHeader title={`Profile`} subTitle={`Hi ${data?.fullName}`} />
            <PageContentContainer>
                <ProfileSwitcher showLogout showContinueButton={false} />
            </PageContentContainer>
        </PageContainer>
    );
}