'use client';

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserController } from "@/server/controllers/UserController";
import CustomerNavbar from "./CustomerNavbar";
import EmployeeNavbar from "./EmployeeNavbar";
import OwnerNavbar from "./OwnerNavbar";
import DefaultNavbar from "./DefaultNavbar";
import { useRoleStore } from "@/stores/RoleStore";
import SimpleNavbar from "./SimpleNavbar";

export default function Navbar() {
    const { role, setRole, clearRole } = useRoleStore();
    const [currentRole, setCurrentRole] = useState<"CUSTOMER" | "EMPLOYEE" | "OWNER" | undefined>(role);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            try {
                const response = await UserController.getCurrentProfile();
                if (!response) {
                    setRole(undefined);
                    return null;
                }
                setRole(response.lastSignedInAs || "CUSTOMER");
                return response;
            } catch (err: any) {
                if (err.response?.status === 401) {
                    clearRole();
                    return null;
                }
                throw err;
            }
        },
        enabled: role === undefined,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
    });

    useEffect(() => {
        setCurrentRole(role);
    }, [role]);

    if (isError) {
        return <SimpleNavbar role={role} />
    }

    return (
        <SimpleNavbar role={role}>
            {
                !isLoading &&
                <RoleNavbar currentRole={currentRole} />
            }
        </SimpleNavbar>
    )
}

function RoleNavbar({ currentRole }: { currentRole: "CUSTOMER" | "EMPLOYEE" | "OWNER" | undefined }) {
    switch (currentRole) {
        case "CUSTOMER":
            return <CustomerNavbar />;
        case "EMPLOYEE":
            return <EmployeeNavbar />;
        case "OWNER":
            return <OwnerNavbar />;
        default:
            return <DefaultNavbar />;
    }
}
