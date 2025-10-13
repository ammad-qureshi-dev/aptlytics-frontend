import { getIconBackgroundColor } from "@/utils/IconUtils";

interface PillProp {
    text: string;
    color: string;
}

export default function Pill({ text, color }: PillProp) {
    return (
        <div
            className={`
        ${getIconBackgroundColor(color)}
        inline-flex items-center justify-center
        py-1.5 px-3
        rounded-full
        w-fit
        shadow-sm
        hover:shadow-md
        transition-all duration-200
        cursor-default
      `}
        >
            <span className="text-xs font-medium text-gray-900">{text}</span>
        </div>
    );
}
