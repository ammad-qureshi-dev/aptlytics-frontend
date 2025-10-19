import { ReactNode } from "react";

interface Prop {
    children: ReactNode;
}

export default function ActionsContainer({ children }: Prop) {
    return (
        <>
            <footer className="w-full flex flex-col gap-4">
                <hr className="border-t-2 border-gray-200 mt-2" />
                {
                    children
                }
            </footer>
        </>
    )
}