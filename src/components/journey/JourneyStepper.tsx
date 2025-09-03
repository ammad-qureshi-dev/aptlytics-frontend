import JourneyStep from "./JourneyStep";
import { JourneyStepType } from "./JourneyStepConfig"

interface JourneyStepperProp {
    steps: JourneyStepType[];
}

export default function JourneyStepper({ steps }: JourneyStepperProp) {
    return (
        <div id="journey-stepper" className="w-1/2 border p-8 lg:w-1/4 md:w-1/3 sm:w-1/2">
            <ul className="w-full flex flex-col items-start">
                {
                    steps.map((step, key) => {
                        return (
                            <li key={key} className="w-full h-32">
                                <JourneyStep step={step} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}