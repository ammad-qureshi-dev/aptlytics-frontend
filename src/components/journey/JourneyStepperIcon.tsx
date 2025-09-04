import { BadgeCheck, Check, PartyPopper } from "lucide-react";
import { JourneyStepType } from "./JourneyStepConfig";
import { DynamicIcon } from "lucide-react/dynamic";

interface JourneyStepProp {
    step: JourneyStepType;
}

export default function JourneyStepIcon({ step }: JourneyStepProp) {
    switch (step.status) {
        case "IN_PROGRESS": return <InProgressStep step={step} />
        case "NOT_STARTED": return <NotStartedStep step={step} />
        case "COMPLETED": return <CompletedStep step={step} />
        default: throw new Error("status=" + step.status + " not supported");
    }
}

const stepNumberStyle: string = "w-10 h-10 p-2 font-bold flex flex-row items-center justify-center rounded-full";
const journeyStepStyle: string = "flex flex-row gap-3"

function CompletedStep({ step }: JourneyStepProp) {
    return (
        <div id="journey-step" className={journeyStepStyle}>
            <div id="left" className="w-10 flex flex-col justify-start ">
                <div id="step-number"
                    className={`bg-[#FF7B00] border-2 border-[#FF7B00] text-white ${stepNumberStyle}`}
                >
                    {
                        step.isLast &&
                        <PartyPopper />
                    }
                    {
                        !step.isLast &&
                        <DynamicIcon name={step.icon || "hammer"} />
                    }
                </div>
                {
                    !step.isLast &&
                    <div className="flex justify-center items-center h-22">
                        <div className="border-l-3 border-[#FF7B00] h-full"></div>
                    </div>
                }
            </div>
            <div id="info-container">
                <div id="labels" className="flex flex-col">
                    <span id="title" className="font-semibold text-lg">{step.stepId}. {step.title}</span>
                    <span id="subtitle" className="text-gray-600 hidden lg:block md:block sm:hiiden">{step.subtitle}</span>
                </div>
            </div>
        </div>
    )
}

function InProgressStep({ step }: JourneyStepProp) {
    return (
        <div id="journey-step" className={journeyStepStyle}>
            <div id="left" className="w-10 flex flex-col justify-start ">
                <div id="step-number"
                    className={`border-[#FF7B00] border-2 text-[#FF7B00] ${stepNumberStyle}`}
                >
                    <DynamicIcon name={step.icon || "hammer"} />
                </div>
                {
                    !step.isLast &&
                    <div className="flex justify-center items-center h-22">
                        <div className="border-l-3 border-gray-300 h-full"></div>
                    </div>
                }
            </div>
            <div id="info-container">
                <div id="labels" className="flex flex-col">
                    <span id="title" className="font-semibold text-lg">{step.stepId}. {step.title}</span>
                    <span id="subtitle" className="text-gray-600 hidden lg:block md:block sm:hiiden">{step.subtitle}</span>
                </div>
            </div>
        </div>
    )
}

function NotStartedStep({ step }: JourneyStepProp) {
    return (
        <div id="journey-step" className={journeyStepStyle}>
            <div id="left" className="w-10 flex flex-col justify-start ">
                <div id="step-number"
                    className={`border-gray-300 border-2 text-gray-400 ${stepNumberStyle}`}
                >
                    <DynamicIcon name={step.icon || "hammer"} />
                </div>
                {
                    !step.isLast &&
                    <div className="flex justify-center items-center h-22">
                        <div className="border-l-3 border-gray-300 h-full"></div>
                    </div>
                }
            </div>
            <div id="info-container">
                <div id="labels" className="flex flex-col">
                    <span id="title" className="font-semibold text-gray-400 text-lg">{step.stepId}. {step.title}</span>
                    <span id="subtitle" className="text-gray-400 hidden lg:block md:block sm:hiiden">{step.subtitle}</span>
                </div>
            </div>
        </div>
    )
}
