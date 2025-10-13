"use client";

import { UserController } from "@/server/controllers/UserController";
import { User } from "@/stores/Types";
import { useQuery } from "@tanstack/react-query";

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

    return (
        <div>
            <h2>Profile</h2>
            <ul>
                {data?.fullName}
            </ul>
            <button onClick={() => refetch()}>Refresh</button>
        </div>
    );
}