import { DynamicIcon } from "lucide-react/dynamic";
import { PageCardType } from "./Types";
import { getColorByAlertType, getIconBackgroundColor, getIconColor } from "@/utils/IconUtils";

interface PageCardProp {
    card: PageCardType;
}

export default function DisplayCard({ card }: PageCardProp) {

    if (card.type !== "none") {
        card.iconColor = getColorByAlertType(card.type);
    }

    return (
        <div
            id="display-card"
            className="flex flex-row gap-2 border border-gray-100 p-4 rounded-md shadow-md 
                       items-center justify-between transition-all duration-300 
                       w-full 
                       hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02]"
        >
            <div className="flex flex-col">
                <h3>{card.title}</h3>
                <h2>{card.data}</h2>
                <span>{card.extra}</span>
            </div>

            <div className={`w-14 h-14 flex items-center justify-center rounded-full ${getIconBackgroundColor(card.iconColor)}`}>
                <DynamicIcon name={card.icon} size={card.iconSize} className={`${getIconColor(card.iconColor)}`} />
            </div>
        </div>
    )
}
