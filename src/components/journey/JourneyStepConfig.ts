export type JourneyStepType = {
  stepId: number;
  prevStepName: string | null;
  stepName: string;
  nextStepName: string | null;
  title: string;
  subtitle: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  isLast?: boolean;
};

export const AddCustomerJourneySteps: JourneyStepType[] = [
  {
    stepId: 1,
    prevStepName: null,
    stepName: "FillOutDetailsStep",
    nextStepName: "ValidateCustomer",
    title: "Fill Out Details",
    subtitle: "Enter customer's information",
    status: "IN_PROGRESS",
  },
  {
    stepId: 2,
    prevStepName: "FillOutDetailsStep",
    stepName: "ValidateCustomer",
    nextStepName: "ReviewStep",
    title: "Validate Customer",
    subtitle: "Checking existing records",
    status: "NOT_STARTED",
  },
  {
    stepId: 3,
    prevStepName: "ValidateCustomer",
    stepName: "ReviewStep",
    nextStepName: "CompletedStep",
    title: "Review",
    subtitle: "Confirm details",
    status: "NOT_STARTED",
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
  },
];
