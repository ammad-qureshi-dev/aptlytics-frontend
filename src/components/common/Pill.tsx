import { getIconBackgroundColor, getPillColor } from "@/utils/IconUtils";
import { IconName } from "../navigation/Types";

interface PillProp {
    text: string;
    color: string;
    icon: IconName;
}

export default function Pill({ text, color }: PillProp) {
    return (
        <div
            className={`
        ${getPillColor(color)}
        inline-flex items-center justify-center
        py-1.5 px-3
        rounded-xl
        w-fit
        shadow-sm
        hover:shadow-md
        transition-all duration-200
        cursor-default
      `}
        >
            <span className="text-xs ">{text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()}</span>
        </div>
    );
}
