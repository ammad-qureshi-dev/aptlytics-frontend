import GridForm from "@/components/forms/GridForm";
import FormInput from "@/components/forms/FormInput";
import { JourneyStep, JourneyStepContainerProp } from "@/components/journey/JourneyConfig";
import { useEffect, useState } from "react";

type CustomerForm = {
    fullName: string;
    email?: string;
    phoneNumber?: string;
}

export default function FillOutDetailsStep({ journeyStep, updateCurrentJourney }: JourneyStepContainerProp) {

    const [formDisplayData, setFormDisplayData] = useState<CustomerForm>(journeyStep.formData);

    useEffect(() => {
        setFormDisplayData(journeyStep.formData as CustomerForm);
    }, [])

    return (
        <div id="fill-out-detail-step" className="py-4">
            <GridForm cols={3} gap={24}>
                <FormInput input={{
                    label: "Customer Name",
                    inputType: "",
                    placeHolder: "Peter Parker",
                    value: (journeyStep.formData as CustomerForm)?.fullName,
                    onValueChange: (val) => updateCurrentJourney((prev: JourneyStep) => ({
                        ...prev,
                        formData: {
                            ...(prev as unknown as CustomerForm),
                            fullName: val
                        }
                    })),
                    isRequired: true
                }} />
                <FormInput input={{
                    label: "Email",
                    inputType: "email",
                    placeHolder: "peter_parker@dailybugle.com",
                    value: (journeyStep.formData as CustomerForm)?.email,
                    onValueChange: (val) => updateCurrentJourney((prev: JourneyStep) => ({
                        ...prev,
                        formData: {
                            ...(prev as unknown as CustomerForm),
                            email: val
                        }
                    })),
                    isRequired: false
                }} />
                <FormInput input={{
                    label: "Phone",
                    inputType: "text",
                    placeHolder: "xxx-xxx-xxxx",
                    value: (journeyStep.formData as CustomerForm)?.phoneNumber,
                    onValueChange: (val) => updateCurrentJourney((prev: JourneyStep) => ({
                        ...prev,
                        formData: {
                            ...(prev as unknown as CustomerForm),
                            phoneNumber: val
                        }
                    })),
                    isRequired: false
                }} />
            </GridForm>
        </div>
    )
}