import { useEffect, useState } from "react";
import { JourneyComponents } from "./journeys/add-customer-journey/AddCustomerJourneyConfig";
import JourneyStepper from "./JourneyStepper";
import Button from "../common/Button";
import JourneyStepContainer from "./JourneyStepContainer";
import { Journeys } from "./JourneyConfig";
import { RemoteCall } from "@/server/JourneyRemoteCall";
import { JourneyStep } from "./JourneyConfig";
import { findCurrentJourney } from "./JourneyConfig";
import { ResponseData, ServiceResponse } from "@/server/Types";
import JourneyAlertsContainer from "./JourneyAlertsContainer";

interface JourneyContainerProp {
    journeyName: string;
}

export default function JourneyContainer({ journeyName }: JourneyContainerProp) {

    const [journeySteps, setJourneySteps] = useState<JourneyStep[]>(Journeys[journeyName]);
    const [currentJourney, setCurrentJourney] = useState<JourneyStep>(findCurrentJourney(journeySteps));
    const [alerts, setAlerts] = useState<ResponseData[]>([]);

    const CurrentComponent = JourneyComponents[currentJourney.stepName];

    const sendRequest = async (): Promise<ServiceResponse | null> => {
        const { journeyAction, formData } = { ...currentJourney };
        if (!journeyAction) {
            return null;
        }

        const response = await RemoteCall.sendRequestToServer(journeyAction, formData);
        setAlerts((response).alerts);
        return response;
    }

    const handleNext = async () => {
        const response = await sendRequest();

        if (response && response.alerts && response.alerts.length > 0) {
            return;
        }

        const steps = [...journeySteps];
        const journey: JourneyStep = { ...currentJourney };
        const currentIndex = journey.stepId - 1;

        journey.status = "COMPLETED";
        steps[currentIndex] = journey;

        setCurrentJourney(journey);
        setJourneySteps(steps);

        if (journey.nextStepName) {
            const nextIndex = currentIndex + 1;
            const newJourney: JourneyStep = { ...steps[nextIndex], status: "IN_PROGRESS" };
            steps[nextIndex] = newJourney;

            if (newJourney.isLast) {
                newJourney.status = "COMPLETED";
                steps[nextIndex] = newJourney;
            }

            setCurrentJourney(newJourney);
            setJourneySteps(steps);
        }
    };


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
        <div id="step-navigation" className="w-full flex flex-col justify-between gap-2">
            <JourneyAlertsContainer alerts={alerts} />
            <div className="flex flex-row gap-8">
                <JourneyStepper steps={journeySteps} />
                <div id="content" className="w-full flex flex-col justify-between">
                    <JourneyStepContainer journeyStep={currentJourney}>
                        <CurrentComponent journeyStep={currentJourney} updateCurrentJourney={setCurrentJourney} />
                    </JourneyStepContainer>
                    <div id="journey-progression" className="flex flex-row gap-4 justify-end">
                        <Button label="Previous" type="button" action="secondary" onClick={handlePrevious} />
                        <Button label="Next" type="button" action="primary" onClick={handleNext} isDisabled={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}

