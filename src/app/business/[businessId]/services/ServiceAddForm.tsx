"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import DropDown from "@/components/forms/dropdown/DropDown";
import { DropDownOptionType } from "@/components/forms/dropdown/Types";
import FormContainer from "@/components/forms/FormContainer";
import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm";
import { LoginRequest, ServicePayload } from "@/components/forms/Types";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ServiceCardDisplay from "./ServiceCardDisplay";
import { ServicesController } from "@/server/controllers/ServicesController";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "@/stores/UserStore";
import { BusinessController } from "@/server/controllers/BusinessController";
import SkeletonBox from "@/components/loading/SkeletonBox";

const SERVICE_LENGTHS_OPTIONS: DropDownOptionType[] = [
    {
        label: "MINUTE",
        value: "MINUTE"
    }
]

export default function ServiceAddForm() {
    const [mounted, setMounted] = useState(false);
    const [servicesInput, setServicesInput] = useState<ServicePayload[]>([]);
    const [currentServiceInput, setCurrentServiceInput] = useState<ServicePayload>({
        name: "",
        price: 0,
        time: 0,
        serviceLength: "MINUTE",
        isNew: true
    });

    const businessId = useUserStore((state) => state.user?.contextId) as string;

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const fetchBusinessById = async () => {
        return await BusinessController.getBusinessById(businessId);
    }

    const { data, isLoading, isError, error } = useQuery<any>({
        queryKey: ["business"],
        queryFn: fetchBusinessById,
        refetchOnMount: "always",
        enabled: !!businessId && mounted
    });

    const fetchAllServicesByBusinessId = async () => {
        const response = await ServicesController.getAllServices(businessId);

        if (response.data && response.success) {
            return response.data;
        }

        return [];
    }

    const { data: allServices, isLoading: isLoading_allServices, isError: isError_allServices, error: error_allServices } = useQuery<any>({
        queryKey: ["allBusinessServices", businessId],
        queryFn: fetchAllServicesByBusinessId,
        enabled: !!businessId && mounted
    })

    useEffect(() => {
        if (allServices && allServices.length > 0) {
            setServicesInput(prev => {
                const newOnes = allServices.filter(
                    (s: { name: string; }) => !prev.some(p => p.name === s.name)
                );
                return [...prev, ...newOnes];
            });
        }
    }, [allServices]);

    const onRemove = (serviceLabel: string) => {
        setServicesInput(prev => prev.filter(service => service.name !== serviceLabel));
    };

    function isServiceAlreadyAdded(service: ServicePayload, inputs: ServicePayload[]): boolean {
        if (inputs === null || inputs === undefined || inputs.length === 0) {
            return false;
        }

        return inputs.some(input => input.name === service.name);
    }

    const onAddService = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = { ...currentServiceInput };
        const addedInputs = [...servicesInput];

        if (isServiceAlreadyAdded(input, addedInputs)) {
            return;
        }

        addedInputs.push(input);

        setServicesInput(addedInputs);
    }

    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="w-full flex lg:flex-row justify-between flex-col gap-12">
                <div className="lg:w-1/3 w-full bg-white p-4 rounded-md shadow-md">
                    <SkeletonBox width={"w-full"} height={"h-64"} />
                </div>
                <div className="lg:w-2/3 w-full">
                    <SkeletonBox width={"w-full"} height={"h-64"} />
                </div>
            </div>
        );
    }

    if (!businessId) return <span>Error</span>;

    if (isLoading) {
        return (
            <div className="w-full flex lg:flex-row justify-between flex-col gap-12">
                <div className="lg:w-1/3 w-full bg-white p-4 rounded-md shadow-md">
                    <SkeletonBox width={"w-full"} height={"h-64"} />
                </div>
                <div className="lg:w-2/3 w-full">
                    <SkeletonBox width={"w-full"} height={"h-64"} />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex lg:flex-row justify-between flex-col gap-12">
            <div className="lg:w-1/3 w-full bg-white p-4 rounded-md shadow-md">
                <FormContainer onSubmitFn={onAddService}>
                    <GridComponent cols={2} gap={24}>
                        <FormInput input={{
                            label: "Service Name",
                            inputType: "text",
                            value: currentServiceInput?.name,
                            isRequired: true,
                            onValueChange: (value) => setCurrentServiceInput(prev => ({ ...prev, name: value })),
                        }} />
                        <FormInput input={{
                            label: "Description",
                            inputType: "textarea",
                            value: currentServiceInput?.description,
                            isRequired: false,
                            onValueChange: (value) => setCurrentServiceInput(prev => ({ ...prev, description: value })),
                        }} />
                        <FormInput input={{
                            label: "Price",
                            inputType: "number",
                            placeHolder: "$$$",
                            value: currentServiceInput?.price,
                            isRequired: true,
                            onValueChange: (value) => setCurrentServiceInput(prev => ({ ...prev, price: value })),
                        }} />
                        <div className="flex flex-row h-fit gap-2 items-center justify-between">
                            <FormInput input={{
                                label: "Service Length",
                                inputType: "number",
                                value: currentServiceInput?.time,
                                isRequired: true,
                                onValueChange: (value) => setCurrentServiceInput(prev => ({ ...prev, time: value })),
                                width: "w-1/2"
                            }} />
                            <DropDown options={SERVICE_LENGTHS_OPTIONS} />
                        </div>
                    </GridComponent>
                    <PrimaryButton label="Add Service" type="submit" icon="plus" isFullWidth />
                </FormContainer>
            </div>
            <ServiceCardDisplay
                cards={servicesInput}
                onRemove={onRemove}
                servicesInput={servicesInput}
                businessId={businessId}
                isLoading={isLoading_allServices}
            />
        </div>
    )
}