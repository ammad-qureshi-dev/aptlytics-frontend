import { JourneyStepType } from "./JourneyStepConfig";

interface JourneyStepContainerProp {
    children: React.ReactNode;
    journeyStep: JourneyStepType
}

export default function JourneyStepContainer({ children, journeyStep }: JourneyStepContainerProp) {
    return (
        <div id="journey-step-container" className="flex flex-col my-6">
            <div id="journey-step-container-header">
                <h2>{journeyStep.stepId}. {journeyStep.title}</h2>
                <hr className="border-t-2 border-gray-200 mt-2" />
            </div>
            {children}
        </div>
    )
}