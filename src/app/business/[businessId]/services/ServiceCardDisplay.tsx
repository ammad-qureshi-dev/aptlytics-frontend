import PrimaryButton from "@/components/buttons/PrimaryButton";
import ServiceCard from "@/components/cards/ServiceCard";
import { ServiceCardType } from "@/components/cards/Types";

interface Prop {
    cards: ServiceCardType[];
    onRemove?: (index: string) => void;
}

export default function ServiceCardDisplay({ cards, onRemove }: Prop) {
    return (
        <div
            id="service-card-display"
            className="
        w-full lg:w-2/3
        flex flex-col
        border border-gray-50
        shadow-md
        rounded-md
        p-6
        bg-white
        gap-4
        max-h-[700px]
      "
        >
            <h2 className="text-xl font-semibold text-gray-800">Services</h2>

            {/* Content area flexes + scrolls */}
            <div
                className="
          flex-1
          overflow-y-auto
          p-2
          bg-gray-50
          rounded-lg
        "
            >
                <div
                    className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-4
            
          "
                >
                    {cards.map((card, index) => (
                        <ServiceCard
                            key={index}
                            card={card}
                            onRemove={() => onRemove?.(card.name)}
                        />
                    ))}
                </div>
            </div>

            {/* Save button pinned to bottom */}
            <div className="flex justify-end pt-3 border-gray-100">
                <PrimaryButton label="Save" type="button" />
            </div>
        </div>
    );
}
