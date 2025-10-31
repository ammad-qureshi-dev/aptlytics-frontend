import { UserController } from "@/server/controllers/UserController";
import { useRoleStore } from "@/stores/RoleStore";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import SkeletonBox from "../loading/SkeletonBox";
import { NavbarItem } from "./Types";
import NavigationLinks from "./NavigationLinks";
import DefaultLogo from "../common/DefaultLogo";
import AccountNavbar from "./AccountNavbar";

export const DEFAULT_NAVIGATION_LINKS: NavbarItem[] = [
    {
        href: "/explore",
        label: "Explore"
    },
    {
        href: "/getting-started",
        label: "Get Started"
    }
]

export const EMPLOYEE_NAVIGATION_LINKS: NavbarItem[] = [
    {
        href: "/appointments",
        label: "Appointments",
        icon: "clipboard-clock"
    },
    {
        href: "/customers",
        label: "Customers",
        icon: "users-round"
    },
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: "layout-dashboard",
    }
]

export const OWNER_NAVIGATION_LINKS: NavbarItem[] = [
    {
        href: "/appointments",
        label: "Appointments",
        // icon: "clipboard-clock"
    },
    {
        href: "/business",
        label: "Business",
        // icon: "store"
    },
    {
        href: "/customers",
        label: "Customers",
        // icon: "users-round"
    },
    {
        href: "/dashboard",
        label: "Dashboard",
        // icon: "layout-dashboard",
    },
    {
        href: "/team",
        label: "Team",
        // icon: "boxes",
    }
]

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

    if (isError || isLoading) {
        return <SkeletonBox width="w-full" height={"h-full"} />
    }

    return (
        <>
            <div id="navbar" className="w-full h-16 flex flex-row items-center justify-between border-gray-50 shadow-sm px-4">
                <div className="flex flex-row gap-2 items-center w-fit h-full">
                    <DefaultLogo />
                    <NavigationLinks items={getNavigationLinks(currentRole)} />
                </div>
                <div>
                    <AccountNavbar role={currentRole} />
                </div>
            </div>
        </>
    )
}

function getNavigationLinks(role: "OWNER" | "EMPLOYEE" | "CUSTOMER" | undefined) {
    switch (role) {
        case "CUSTOMER": return DEFAULT_NAVIGATION_LINKS;
        case "EMPLOYEE": return EMPLOYEE_NAVIGATION_LINKS;
        case "OWNER": return OWNER_NAVIGATION_LINKS;
        default: return DEFAULT_NAVIGATION_LINKS;
    }
}
