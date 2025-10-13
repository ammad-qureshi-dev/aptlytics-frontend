"use client";

import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import { UserController } from "@/server/controllers/UserController";
import { User } from "@/stores/Types";
import { useQuery } from "@tanstack/react-query";
import AccountSelector from "../auth/accounts/AccountSelector";
import { ChevronDownCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import { useState } from "react";

export default function Profile() {

    const fetchMe = async () => {
        const response = await UserController.getMe();
        return response;
    }

    const { data, isLoading, isError, error, refetch } = useQuery<User>({
        queryKey: ["user"],
        queryFn: fetchMe
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    const [showAccountSelector, setShowAccountSelector] = useState<boolean>(false);

    return (
        <PageContainer>
            <PageHeader title={`Profile`} subTitle={`Hi ${data?.fullName}`} />

            <div className="flex flex-col w-1/2 my-4">
                <div className="flex flex-row items-center gap-2">
                    <span className="text-lg">Accounts</span>
                    <button onClick={() => { setShowAccountSelector(!showAccountSelector) }}>

                        {
                            showAccountSelector &&
                            <ChevronDownCircleIcon size={20} />
                        }
                        {
                            !showAccountSelector &&
                            <ChevronRightCircleIcon size={20} />
                        }

                    </button>
                </div>

                {
                    showAccountSelector &&
                    <AccountSelector />
                }

            </div>
        </PageContainer>
    );
}