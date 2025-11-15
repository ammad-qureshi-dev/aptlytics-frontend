"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import ServiceCard from "@/components/cards/ServiceCard";
import { ServiceCardType } from "@/components/cards/Types";
import { ServicePayload } from "@/components/forms/Types";
import SkeletonBox from "@/components/loading/SkeletonBox";
import { ServicesController } from "@/server/controllers/ServicesController";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface Prop {
    cards: ServiceCardType[];
    onRemove?: (index: string) => void;
    businessId: string,
    servicesInput: ServicePayload[];
    isLoading?: boolean;
}

export default function ServiceCardDisplay({ cards, onRemove, businessId, servicesInput, isLoading = false }: Prop) {

    const saveServices = async () => {
        const response = await ServicesController.addServices(businessId, servicesInput);

        if (response.data && response.success) {
            toast.success("Services Added!");
        } else {
            console.error(response);
            toast.error("Error");
        }
    }

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
            <div className="flex-1 overflow-y-auto p-2 bg-gray-50 rounded-lg">
                {
                    isLoading && <SkeletonBox height="h-full" width="w-full" />
                }
                {
                    !isLoading &&
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                    >
                        {cards.map((card, index) => (
                            <ServiceCard
                                key={index}
                                card={card}
                                onRemove={() => onRemove?.(card.name)}
                            />
                        ))}
                    </div>
                }
            </div>
            <div className="flex justify-end pt-3 border-gray-100">
                <PrimaryButton label="Save" type="button" onClick={saveServices} />
            </div>
        </div>
    );
}
