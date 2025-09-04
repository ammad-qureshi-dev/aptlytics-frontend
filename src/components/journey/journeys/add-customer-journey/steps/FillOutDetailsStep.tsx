import GridForm from "@/components/forms/GridForm";
import FormInput from "@/components/forms/FormInput";
import { JourneyStepContainerProp } from "@/components/journey/JourneyConfig";

export default function FillOutDetailsStep({ journeyStep, updateJourneyFormData }: JourneyStepContainerProp) {
    return (
        <div id="fill-out-detail-step" className="py-4">
            <GridForm cols={0} gap={24}>
                <FormInput input={{
                    label: "Customer Name",
                    inputType: "",
                    placeHolder: undefined,
                    value: undefined,
                    onValueChange: function (newValue: any): void {
                        throw new Error("Function not implemented.");
                    },
                    css: undefined,
                    isRequired: true
                }} />
                <FormInput input={{
                    label: "Email",
                    inputType: "",
                    placeHolder: undefined,
                    value: undefined,
                    onValueChange: function (newValue: any): void {
                        throw new Error("Function not implemented.");
                    },
                    css: undefined,
                    isRequired: undefined
                }} />
                <FormInput input={{
                    label: "Phone",
                    inputType: "",
                    placeHolder: undefined,
                    value: undefined,
                    onValueChange: function (newValue: any): void {
                        throw new Error("Function not implemented.");
                    },
                    css: undefined,
                    isRequired: undefined
                }} />
            </GridForm>
        </div>
    )
}