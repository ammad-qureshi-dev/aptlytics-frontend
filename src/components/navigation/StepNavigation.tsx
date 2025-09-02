import { DynamicIcon } from "lucide-react/dynamic";
import { StepNavigationType } from "./Types"

interface StepNavigationProp {
    steps: StepNavigationType[];
}

export default function StepNavigation({ steps }: StepNavigationProp) {
    return (
        <div id="step-navigation" className="p-8 my-8 w-1/4">
            <ul className="w-full flex flex-col items-center justify-center">
                {
                    steps.map((step, key) => {
                        return (
                            <li key={key} className="w-full">
                                <Step step={step} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

interface StepProp {
    step: StepNavigationType
}

function Step({ step }: StepProp) {
    return (
        <div id="step" className="flex flex-row gap-3 h-48 lg:h-24 md:h-36 sm:h-48">
            <div id="icon" className="flex flex-col">
                {
                    step.isCompleted &&
                    <div className="w-8 h-8 p-1 rounded-full text-white bg-[#FF7B00]">
                        <DynamicIcon
                            name="check"
                            size={24} />
                    </div>
                }

                {/* Circle + Top half of line */}
                {
                    !step.isCompleted && step.isCurrentStep &&
                    <div className="w-8 h-8 p-1 rounded-full border-2 border-[#FF7B00] text-[#FF7B00] flex items-center justify-center">
                        <span>{step.step}</span>
                    </div>
                }
                {
                    !step.isCompleted && !step.isCurrentStep &&
                    <div className="w-8 h-8 p-1 rounded-full border-2 border-gray-300 text-gray-300 flex items-center justify-center">
                        <span>{step.step}</span>
                    </div>
                }


                {/* Vertical Line */}
                {
                    !step.isFirst && !step.isLast &&
                    <div id="center-line" className="border-l-1 border-l-white h-full ">
                        <div
                            id="left-half"
                            className="border-0 w-4 border-r-2 border-r-gray-300 h-full"
                        >
                        </div>
                    </div>
                }
                {
                    !step.isLast && !step.isCurrentStep &&
                    <div id="center-line" className="border-l-1 border-l-white h-full ">
                        <div
                            id="left-half"
                            className="border-0 w-4 border-r-2 border-r-gray-300 h-full"
                        >
                        </div>
                    </div>
                }
                {
                    step.isLast &&
                    <div id="center-line" className="border-l-1 border-l-white h-full ">
                    </div>
                }

            </div>
            <div className="flex flex-col">
                <span className="font-medium">{step.title}</span>
                <span>{step.subtitle}</span>
            </div>
        </div >
    )
}
