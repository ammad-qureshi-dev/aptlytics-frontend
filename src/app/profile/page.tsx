"use client";

import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import { UserController } from "@/server/controllers/UserController";
import { User } from "@/stores/Types";
import { useQuery } from "@tanstack/react-query";
import ProfileSwitcher from "@/components/profile/ProfileSwitcher";
import SkeletonBox from "@/components/loading/SkeletonBox";
import PageContentContainer from "@/components/page/PageContentContainer";
import Link from "next/link";

export default function Profile() {
    const fetchMe = async () => {
        const response = await UserController.getMe();
        return response;
    }

    const { data, isLoading, isError, error } = useQuery<User>({
        queryKey: ["user"],
        queryFn: fetchMe
    });

    if (isError) return <p>Error: {error.message}</p>;

    return (
        <PageContainer>
            <PageHeader title={`Profile`} subTitle={`Hi ${data?.fullName}`} />
            <PageContentContainer>
                {
                    isLoading &&
                    <SkeletonBox width="w-full" height="w-full" />
                }
                {
                    data &&
                    <>
                        <ProfileSwitcher showLogout showContinueButton={false} refreshOnSelect={false} />
                        <Link href="/getting-started">
                            <span className="flex flex-row gap-1">
                                Want to add your business or job appointments?
                                <span className="text-[#FF7B00]">
                                    <h6> Click here!</h6>
                                </span>
                            </span>
                        </Link>
                    </>
                }
            </PageContentContainer>
        </PageContainer>
    );
}