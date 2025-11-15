import { Circle, CircleDashed, Star, X } from "lucide-react";
import { ServiceCardType } from "./Types";

interface Prop {
    card: ServiceCardType;
    onRemove: (index: string) => void;
}

export default function ServiceCard({ card, onRemove }: Prop) {
    return (
        <div
            className="
    relative flex flex-col
    group
    bg-white border border-gray-100 rounded-xl p-5
    shadow-sm cursor-pointer
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:shadow-lg
    hover:border-blue-200 hover:bg-gradient-to-br from-white to-blue-50
    animate-fadeIn
  "
        >

            {card.isNew &&

                <button
                    onClick={() => onRemove(card.name)}
                    className="
            absolute top-3 right-3
            text-gray-400
            opacity-0 group-hover:opacity-100
            
            transition-all duration-200
            z-10
            "
                >
                    <X size={18} />
                </button>
            }

            <div className="flex flex-row items-center gap-2">
                {
                    card.isNew &&
                    <CircleDashed size={18} className="text-yellow-300" />
                }
                <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
            </div>
            <p className="text-sm text-gray-500 mt-1 flex-1">{card.description}</p>

            <div className="mt-4 flex items-baseline justify-between">
                <span className="text-xl font-bold text-gray-900">${card.price}</span>
                <span className="text-xs text-gray-400">
                    {card.serviceLength} {card.time > 1 ? "hours" : "hour"}
                </span>
            </div>
        </div>

    );
}
