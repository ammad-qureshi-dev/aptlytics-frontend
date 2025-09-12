import { DynamicIcon } from "lucide-react/dynamic";
import { AddCustomerJourneySteps } from "./journeys/add-customer-journey/AddCustomerJourneyConfig";

export const Journeys: Record<string, JourneyStep[]> = {
  AddCustomerJourneySteps,
};

export type JourneyStep = {
  stepId: number;
  prevStepName: string | null;
  stepName: string;
  nextStepName: string | null;
  title: string;
  subtitle: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  isLast?: boolean;
  icon?: Icon | "hammer";
  journeyAction?: JourneyAction;
  revertAction?: JourneyAction;
  formData?: any;
  nextStepStore?: any;
};

export type JourneyAction = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  pathVariables?: string[];
  requestParams?: string[];
};

export interface JourneyStepContainerProp {
  journeyStep: JourneyStep;
  updateCurrentJourney: (val: any) => void;
}

type Icon = React.ComponentProps<typeof DynamicIcon>["name"];

export function findCurrentJourney(steps: JourneyStep[]): JourneyStep {
  if (!steps || steps.length === 0) {
    throw new Error("No journey steps found");
  }

  const step = steps.find((s) => s.status === "IN_PROGRESS");

  if (!step) {
    return steps[steps.length - 1];
  }

  return step;
}
