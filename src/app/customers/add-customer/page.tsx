'use client';

import StepNavigation from "@/components/navigation/StepNavigation";
import { StepNavigationType } from "@/components/navigation/Types";
import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import { useState, useEffect } from "react";
import DynamicRender from "./DynamicRender";

export default function AddCustomer() {

    const steps: StepNavigationType[] = [
        {
            step: 1,
            type: "FillOutDetailsStep",
            title: "Fill Out Details",
            subtitle: "Enter customer's information",
            isCurrentStep: true,
            isFirst: true
        },
        {
            step: 2,
            type: "ValidateCustomerStep",
            title: "Validate Customer",
            subtitle: "Checking existing records",
        },
        {
            step: 3,
            type: "ReviewStep",
            title: "Review",
            subtitle: "Confirm the details",
        },
        {
            step: 4,
            type: "SuccessStep",
            title: "Success",
            subtitle: "Customer added",
            isLast: true
        },
    ];

    const [navigationSteps, setNavigationSteps] = useState<StepNavigationType[]>(steps);
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [currentStep, setCurrentStep] = useState<StepNavigationType>(navigationSteps[stepIndex]);

    const handleStepIncrementor = (i: number) => {
        const minIndex = 1;
        const maxIndex = steps.length;
        if (i > maxIndex || i < minIndex) {
            alert("out of bounds");
            return;
        } else {

            // update old step
            const newSteps = [...navigationSteps];
            newSteps[i - 1] = { ...currentStep, isCompleted: true, isCurrentStep: false };
            setNavigationSteps(newSteps);

            // increment step
            setStepIndex(i);

            // update next step to current step
            newSteps[i] = { ...newSteps[i], isCurrentStep: true }
            setCurrentStep(newSteps[i])

            // update overall steps
            setNavigationSteps(newSteps);
        }
    }

    return (
        <PageContainer>
            <PageHeader title="Add Customer" subTitle="Congrats on getting a new customer" icon="party-popper" iconColor="orange" />

            <div className="flex flex-row justify-between">
                <button type="button" className="cursor-pointer"
                    onClick={() => { handleStepIncrementor(stepIndex + 1) }}
                >next</button>
                {/* <DynamicRender name= /> */}
                <StepNavigation steps={navigationSteps} />
            </div>
        </PageContainer>
    )
}