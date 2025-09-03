import { JourneyStepType } from "./JourneyStepConfig";
import { useState } from "react";
import { Journeys } from "./JourneyConfig";
import Button from "../common/Button";
import JourneyStepper from "./JourneyStepper";

interface JourneyContainerProp {
    journeyName: string;
    children?: React.ReactNode;
}

export default function JourneyContainer({ journeyName, children }: JourneyContainerProp) {
    const [journeySteps, setJourneySteps] = useState<JourneyStepType[]>(Journeys[journeyName]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleStepDecrementor = (nextStep: number) => {
        setJourneySteps((prevSteps) => {
            if (nextStep < 0 || nextStep >= prevSteps.length) {
                return prevSteps;
            }

            const steps = [...prevSteps];

            steps[currentStepIndex] = {
                ...steps[currentStepIndex],
                status: "NOT_STARTED",
            };

            steps[nextStep] = {
                ...steps[nextStep],
                status: "IN_PROGRESS",
            };

            setCurrentStepIndex(nextStep);
            return steps;
        });
    };

    const handleStepIncrementor = (nextStep: number) => {
        setJourneySteps((prevSteps) => {
            if (nextStep < 0 || nextStep > prevSteps.length) {
                return prevSteps;
            }

            const steps = [...prevSteps];

            steps[currentStepIndex] = {
                ...steps[currentStepIndex],
                status: "COMPLETED",
            };

            if (nextStep < prevSteps.length) {
                steps[nextStep] = {
                    ...steps[nextStep],
                    status: "IN_PROGRESS",
                };
            } else {
                steps[prevSteps.length - 1] = {
                    ...steps[prevSteps.length - 1],
                    status: "COMPLETED",
                };
            }

            setCurrentStepIndex(Math.min(nextStep, prevSteps.length - 1));
            return steps;
        });
    };

    return (
        <div id="step-navigation" className="w-full border flex flex-row justify-between">
            <div id="content" className="w-full flex flex-col justify-between border border-red-500">
                {children}

                <div id="journey-navigation" className="w-full flex flex-row gap-8 border border-green-400">
                    <Button
                        label="Prev"
                        type="button"
                        action="secondary"
                        onClick={() => handleStepDecrementor(currentStepIndex - 1)}
                    />
                    <Button
                        label="Next"
                        type="button"
                        action="primary"
                        onClick={() => handleStepIncrementor(currentStepIndex + 1)}
                    />
                </div>
            </div>

            <JourneyStepper steps={journeySteps} />
        </div>
    );
}
