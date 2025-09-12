import JourneyStepIcon from "./JourneyStepperIcon";
import { JourneyStepType } from "./JourneyStepConfig"

interface JourneyStepperProp {
    steps: JourneyStepType[];
}

export default function JourneyStepper({ steps }: JourneyStepperProp) {
    return (
        <div id="journey-stepper" className="w-1/3 p-8 lg:w-1/3 md:w-1/2 sm:w-2/3 bg-gray-50 rounded-lg shadow-md">
            <ul className="w-full flex flex-col items-start">
                {
                    steps.map((step, key) => {
                        return (
                            <li key={key} className="w-full h-32">
                                <JourneyStepIcon step={step} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}