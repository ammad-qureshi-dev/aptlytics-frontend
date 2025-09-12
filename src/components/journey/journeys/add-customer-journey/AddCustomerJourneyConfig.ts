import FillOutDetailsStep from "@/components/journey/journeys/add-customer-journey/steps/FillOutDetailsStep";
import CompletedStep from "@/components/journey/journeys/add-customer-journey/steps/CompletedStep";
import ReviewStep from "@/components/journey/journeys/add-customer-journey/steps/ReviewStep";
import SearchCustomerStep from "@/components/journey/journeys/add-customer-journey/steps/SearchCustomerStep";
import { JourneyStep } from "../../JourneyConfig";

export const JourneyComponents: Record<string, React.ComponentType<any>> = {
  SearchCustomerStep,
  FillOutDetailsStep,
  ReviewStep,
  CompletedStep,
};

export const AddCustomerJourneySteps: JourneyStep[] = [
  {
    stepId: 1,
    prevStepName: null,
    stepName: "FillOutDetailsStep",
    nextStepName: "ReviewStep",
    title: "Fill Out Details",
    subtitle: "Enter customer's information",
    status: "IN_PROGRESS",
    icon: "book-open-text",
    journeyAction: {
      url: "/customer/{businessId}",
      method: "POST",
      pathVariables: ["businessId"],
    },
    nextStepStore: {
      customerId: "",
      businessId: "",
    },
  },
  {
    stepId: 2,
    prevStepName: "FillOutDetailsStep",
    stepName: "ReviewStep",
    nextStepName: "CompletedStep",
    title: "Review",
    subtitle: "Confirm details",
    status: "NOT_STARTED",
    icon: "scan-eye",
    revertAction: {
      url: "/customer/{businessId}/{customerId}",
      method: "DELETE",
      pathVariables: ["businessId", "customerId"],
    },
    nextStepStore: {
      customerId: "",
      businessId: "",
    },
  },
  {
    stepId: 3,
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
