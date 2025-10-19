import { DynamicIcon } from "lucide-react/dynamic";
import { IconName } from "../navigation/Types";

interface Prop {
    label: string;
    onClick?: (val: any) => void;
    isFullWidth?: boolean;
    icon?: IconName;
    type: "submit" | "button" | "reset"
}

export default function PrimaryButton({ label, onClick, icon, isFullWidth, type }: Prop) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                ${isFullWidth ? "w-full" : "w-36"} h-12
                border
                py-2 px-4
                flex flex-row
                justify-center items-center gap-2
                rounded-md
                bg-[#FF7B00]
                border-[#FF7B00]
                text-white
                cursor-pointer
                transition-all
                hover:shadow-md
                hover:-translate-y-0.5
                hover:bg-[#f77700]
                active:-translate-y-1
                `}>
            {
                icon &&
                <DynamicIcon name={icon} size={24} />

            }
            <span className="text-xl font-medium">{label}</span>
        </button>
    )
}