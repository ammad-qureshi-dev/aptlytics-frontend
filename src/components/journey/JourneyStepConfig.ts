import { DynamicIcon } from "lucide-react/dynamic";

type Icon = React.ComponentProps<typeof DynamicIcon>["name"];

export type JourneyStepType = {
  stepId: number;
  prevStepName: string | null;
  stepName: string;
  nextStepName: string | null;
  title: string;
  subtitle: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  isLast?: boolean;
  icon?: Icon | "hammer";
};

export function findCurrentJourney(steps: JourneyStepType[]): JourneyStepType {
  if (!steps || steps.length === 0) {
    throw new Error("No journey steps found");
  }

  const step = steps.find((s) => s.status === "IN_PROGRESS");

  if (!step) {
    return steps[steps.length - 1];
  }

  return step;
}
