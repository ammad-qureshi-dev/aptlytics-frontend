import { DynamicIcon } from "lucide-react/dynamic";

export type IconName = React.ComponentProps<typeof DynamicIcon>["name"];

interface ButtonProp {
    label: string;
    type: "submit" | "reset" | "button";
    action: "primary" | "secondary";
    onClick?: (val: any) => void;
    icon?: IconName;
    iconSize?: number | 24;
    isDisabled?: boolean;
}

export default function Button({ label, type, action, icon, iconSize, onClick, isDisabled }: ButtonProp) {
    const getColor = (isDisabled: boolean): string => {
        if (!isDisabled) {
            return action === "primary" ? "bg-[#FF7B00] text-white font-bold" : "border"
        } else {
            return "bg-gray-300 text-white font-bold"
        }

    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={`${type === "button" ? "w-30" : "w-full"} h-12 text-lg flex flex-row items-center justify-center gap-2 rounded-md cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 ${getColor(isDisabled || false)} active:translate-y-0.5`}>
            {
                icon &&
                <DynamicIcon name={icon} size={iconSize} />
            }
            <span>{label}</span>
        </button >
    )
}