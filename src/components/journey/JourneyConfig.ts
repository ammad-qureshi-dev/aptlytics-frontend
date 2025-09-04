import { AddCustomerJourneySteps } from "./journeys/add-customer-journey/AddCustomerJourneyConfig";
import { JourneyStepType } from "./JourneyStepConfig";

export const Journeys: Record<string, JourneyStepType[]> = {
  AddCustomerJourneySteps,
};

export interface JourneyStepContainerProp {
  journeyStep: JourneyStepType;
  updateJourneyFormData: (val: any) => void;
}

export type JourneyResponse = {
  description: string;
  responseType: string;
  responseSeverity: "ERROR" | "WARNING" | "INFO" | "SUCCESS";
};

export type JourneyData = {
  formData?: any;
  alerts: JourneyResponse[];
};
