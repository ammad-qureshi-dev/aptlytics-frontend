import { DynamicIcon } from "lucide-react/dynamic";
import { PageCardType } from "./Types";

interface PageCardProp {
    card: PageCardType;
}

export default function DisplayCard({ card }: PageCardProp) {

    if (card.type !== "none") {
        card.iconColor = getColorByType(card.type);
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

function getColorByType(type: string) {
    switch (type) {
        case "error": return "red";
        case "info": return "blue";
        case "warning": return "yellow";
        case "success": return "green";
        default: return "black";

    }
}

function getIconColor(iconColor: string) {
    switch (iconColor) {
        case "blue": return "text-blue-500"
        case "red": return "text-red-500"
        case "green": return "text-green-500"
        case "yellow": return "text-yellow-500"
        default: return "text-black";
    }
}

function getIconBackgroundColor(iconColor: string) {
    switch (iconColor) {
        case "blue": return "bg-blue-100 border border-blue-100"
        case "red": return "bg-red-100 border border-red-100"
        case "green": return "bg-green-100 border border-green-100"
        case "yellow": return "bg-yellow-100 border border-yellow-100"
        default: return "bg-black";
    }
}