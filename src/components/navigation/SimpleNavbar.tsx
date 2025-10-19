import AuthenticateButton from "../buttons/AuthenticateButton";
import DefaultLogo from "../common/DefaultLogo";
import AccountNavbarActions from "./AccountNavbarActions";

interface Prop {
    role: "CUSTOMER" | "EMPLOYEE" | "OWNER" | undefined;
    children?: React.ReactNode;
}

export default function SimpleNavbar({ role, children }: Prop) {
    return (
        <>
            <div className="w-full flex flex-row justify-between items-center border border-gray-100 py-4 px-8 shadow-xs border-b-2">
                <div className="flex flex-row items-center">
                    <DefaultLogo />
                    {children}
                </div>
                {role ? <AccountNavbarActions /> : <AuthenticateButton />}
            </div>
        </>
    )
}