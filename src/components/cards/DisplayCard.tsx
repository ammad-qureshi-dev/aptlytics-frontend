"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { PageCardType } from "./Types";
import { getColorByAlertType, getIconBackgroundColor, getIconColor } from "@/utils/IconUtils";
import { useRouter } from "next/navigation";

interface PageCardProp {
    card: PageCardType;
}

export default function DisplayCard({ card }: PageCardProp) {

    const router = useRouter();

    if (card.type !== "none") {
        card.iconColor = getColorByAlertType(card.type);
    }

    const cardRedirectTo = () => {
        if (card.redirectTo) {
            router.push(card.redirectTo);
        }
    }

    return (
        <>
            <div
                id="display-card"
                className="
                w-full
                h-48
                flex flex-row
                items-center
                justify-between
                gap-2
                bg-white
                p-4
                border border-gray-50
                rounded-md
                shadow-md 
                transition-all
                duration-300
                cursor-pointer
                hover:-translate-y-1
                hover:shadow-lg
                hover:scale-[1.02]"
                onClick={cardRedirectTo}
            >

                <div id="left" className="lg:w-4/5 md:w-2/3 sm:w-1/2">
                    <div className="flex flex-col">
                        <span className="font-300">{card.title}</span>
                        <h2>{card.data}</h2>
                        <h3>{card.extra}</h3>
                    </div>
                </div>

                <div id="right" className="lg:w-1/5 md:w-1/3 sm:w-1/2">
                    <div className=" flex flex-row justify-end">
                        <div className={`w-14 h-14 flex items-center justify-center rounded-full ${getIconBackgroundColor(card.iconColor)}`}>
                            <DynamicIcon name={card.icon} size={card.iconSize} className={`${getIconColor(card.iconColor)}`} />
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
