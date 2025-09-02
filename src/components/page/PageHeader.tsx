import { getIconColor } from "@/utils/IconUtils";
import { DynamicIcon } from "lucide-react/dynamic";

type Icon = React.ComponentProps<typeof DynamicIcon>["name"];

interface PageHeaderProp {
    title: string;
    subTitle?: string;
    icon?: Icon;
    iconColor?: string;
}

export default function PageHeader({ title, subTitle, icon, iconColor }: PageHeaderProp) {
    return (
        <div id="page-header" className="flex flex-col gap-1">
            <h1 className="font-bold">{title}</h1>
            <span className="flex flex-row gap-1 pb-2">
                <h3>{subTitle}</h3>
                {
                    icon &&
                    <DynamicIcon name={icon || "hammer"} className={`${getIconColor(iconColor)}`} />
                }
            </span>
            <hr className="border-t-2 border-gray-200" />
        </div>
    )
}