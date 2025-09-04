import FillOutDetailsStep from "@/components/journey/journeys/add-customer-journey/steps/FillOutDetailsStep";
import CompletedStep from "@/components/journey/journeys/add-customer-journey/steps/CompletedStep";
import ReviewStep from "@/components/journey/journeys/add-customer-journey/steps/ReviewStep";
import ValidateCustomerStep from "@/components/journey/journeys/add-customer-journey/steps/ValidateCustomerStep";

import { JourneyStepType } from "../../JourneyStepConfig";

export const JourneyComponents: Record<string, React.ComponentType<any>> = {
  FillOutDetailsStep,
  ValidateCustomerStep,
  ReviewStep,
  CompletedStep,
};

export const AddCustomerJourneySteps: JourneyStepType[] = [
  {
    stepId: 1,
    prevStepName: null,
    stepName: "FillOutDetailsStep",
    nextStepName: "ValidateCustomerStep",
    title: "Fill Out Details",
    subtitle: "Enter customer's information",
    status: "IN_PROGRESS",
    icon: "book-open-text",
  },
  {
    stepId: 2,
    prevStepName: "FillOutDetailsStep",
    stepName: "ValidateCustomerStep",
    nextStepName: "ReviewStep",
    title: "Validate Customer",
    subtitle: "Checking existing records",
    status: "NOT_STARTED",
    icon: "user-round-check",
  },
  {
    stepId: 3,
    prevStepName: "ValidateCustomerStep",
    stepName: "ReviewStep",
    nextStepName: "CompletedStep",
    title: "Review",
    subtitle: "Confirm details",
    status: "NOT_STARTED",
    icon: "scan-eye",
  },
  {
    stepId: 4,
    prevStepName: "ReviewStep",
    stepName: "CompletedStep",
    nextStepName: null,
    title: "Success",
    subtitle: "Customer added",
    status: "NOT_STARTED",
    isLast: true,
    icon: "check-check",
  },
];
