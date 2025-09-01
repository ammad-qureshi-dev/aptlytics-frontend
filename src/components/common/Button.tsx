import { DynamicIcon } from "lucide-react/dynamic";

type IconName = React.ComponentProps<typeof DynamicIcon>["name"];

interface ButtonProp {
    label: string;
    type: "submit" | "reset" | "button";
    action: "primary" | "secondary";
    onClick?: () => void;
    icon?: IconName;
    iconSize?: number | 24;
}

export default function Button({ label, type, action, icon, iconSize, onClick }: ButtonProp) {
    const getColor = (): string => {
        return action === "primary" ? "bg-[#FF7B00] text-white font-bold" : "border"
    }

    return (
        <button type={type} className={`h-12 ${type === "button" ? "w-32" : "w-full"} text-xl flex flex-row items-center justify-center gap-2 rounded-md cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 ${getColor()}`}>
            {
                icon &&
                <DynamicIcon name={icon} size={iconSize} />
            }
            <span>{label}</span>
        </button >
    )
}