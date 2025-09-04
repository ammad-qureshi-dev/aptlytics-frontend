import { findCurrentJourney, JourneyStepType } from "./JourneyStepConfig";
import { useState } from "react";
import { JourneyComponents } from "./journeys/add-customer-journey/AddCustomerJourneyConfig";
import JourneyStepper from "./JourneyStepper";
import Button from "../common/Button";
import JourneyStepContainer from "./JourneyStepContainer";
import { JourneyData, Journeys } from "./JourneyConfig";

interface JourneyContainerProp {
    journeyName: string;
}

export default function JourneyContainer({ journeyName }: JourneyContainerProp) {

    const [journeySteps, setJourneySteps] = useState<JourneyStepType[]>(Journeys[journeyName]);
    const [currentJourney, setCurrentJourney] = useState<JourneyStepType>(findCurrentJourney(journeySteps));
    const [journeyData, setJourneyData] = useState<JourneyData>({ alerts: [], formData: null });
    const CurrentComponent = JourneyComponents[currentJourney.stepName];


    const handleNext = () => {
        const steps = [...journeySteps];
        const journey = { ...currentJourney };
        const currentIndex = journey.stepId - 1;

        journey.status = "COMPLETED";
        steps[currentIndex] = journey;

        setCurrentJourney(journey);
        setJourneySteps(steps);

        if (!journey.isLast) {
            const newJourney = { ...steps[currentIndex + 1], status: "IN_PROGRESS" as const };
            steps[currentIndex + 1] = newJourney;

            setCurrentJourney(newJourney);
            setJourneySteps(steps);
        }
    }

    const handlePrevious = () => {
        const steps = [...journeySteps];
        const journey = { ...currentJourney };
        const currentIndex = journey.stepId - 1;

        journey.status = "NOT_STARTED";
        steps[currentIndex] = journey;

        setCurrentJourney(journey);
        setJourneySteps(steps);

        if (currentIndex > 0) {
            const newJourney = { ...steps[currentIndex - 1], status: "IN_PROGRESS" as const };
            steps[currentIndex - 1] = newJourney;

            setCurrentJourney(newJourney);
            setJourneySteps(steps);
        }
    }

    return (
        <div id="step-navigation" className="w-full flex flex-row justify-between py-4 gap-8">
            <JourneyStepper steps={journeySteps} />

            <div id="content" className="w-full flex flex-col justify-between">
                <JourneyStepContainer journeyStep={currentJourney}>
                    <CurrentComponent journeyStep={currentJourney} updateJourneyFormData={setJourneyData} />
                </JourneyStepContainer>

                <div id="journey-progression" className="flex flex-row gap-4 justify-end">
                    <Button label="Previous" type="button" action="secondary" onClick={handlePrevious} />
                    <Button label="Next" type="button" action="primary" onClick={handleNext} isDisabled={journeyData.alerts.length > 0} />
                </div>
            </div>
        </div>
    );
}

