import { UserController } from "@/server/controllers/UserController";
import { useRoleStore } from "@/stores/RoleStore";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import SkeletonBox from "../loading/SkeletonBox";
import { NavbarItem } from "./Types";
import NavigationLinks from "./NavigationLinks";
import DefaultLogo from "../common/DefaultLogo";
import AccountNavbar from "./AccountNavbar";
import { useUserStore } from "@/stores/UserStore";

export const DEFAULT_NAVIGATION_LINKS: NavbarItem[] = [
    {
        href: "/explore",
        label: "Explore"
    },
    {
        href: "/getting-started",
        label: "Get Started"
    },
    {
        href: "/dashboard",
        label: "Dashboard",
    }
]

export const EMPLOYEE_NAVIGATION_LINKS: NavbarItem[] = [
    {
        href: "/appointments",
        label: "Appointments",
    },
    {
        href: "/customers",
        label: "Customers",
    },
    {
        href: "/dashboard",
        label: "Dashboard",
    }
]

export const OWNER_NAVIGATION_LINKS: NavbarItem[] = [
    {
        href: "/appointments",
        label: "Appointments",
    },
    {
        href: "/business",
        label: "Business",
    },
    {
        href: "/customers",
        label: "Customers",
    },
    {
        href: "/dashboard",
        label: "Dashboard",
    },
    {
        href: "/team",
        label: "Team",
    }
]

export default function Navbar() {
    const { role, setRole, clearRole } = useRoleStore();
    const contextId = useUserStore((state) => state.user?.contextId) as string;


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

    if (isLoading) return <SkeletonBox width="w-full" height="h-full" />;
    if (isError) return <SkeletonBox width="w-full" height="h-full" />;

    return (
        <div id="navbar" className="w-full h-16 flex flex-row items-center justify-between border-gray-50 shadow-sm px-4">
            <div className="flex flex-row gap-2 items-center w-fit h-full">
                <DefaultLogo />
                <NavigationLinks items={getNavigationLinks(role, contextId)} />
            </div>
            <AccountNavbar role={role} />
        </div>
    );
}


function getNavigationLinks(role: "OWNER" | "EMPLOYEE" | "CUSTOMER" | undefined, contextId?: string) {
    switch (role) {
        case "CUSTOMER":
            return DEFAULT_NAVIGATION_LINKS;
        case "EMPLOYEE":
            return EMPLOYEE_NAVIGATION_LINKS;
        case "OWNER":
            getBusinessByIdLink(contextId);
            return OWNER_NAVIGATION_LINKS;
        default:
            return DEFAULT_NAVIGATION_LINKS;
    }
}


async function getBusinessByIdLink(contextId?: string) {
    if (!contextId) return;

    const businessLink = OWNER_NAVIGATION_LINKS.find((e) => e.href.startsWith("/business"));
    if (businessLink) {
        businessLink.href = `/business/${contextId}`;
    }
}
