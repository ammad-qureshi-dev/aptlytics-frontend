import type { DynamicIcon } from "lucide-react/dynamic";

type IconName = React.ComponentProps<typeof DynamicIcon>["name"];

export type NavItemType = {
  readonly href: string;
  readonly label: string;
  icon?: IconName;
  iconSize?: number;
};

export type MenuItemType = {
  readonly label: string;
  readonly isDefault: boolean;
  icon?: IconName;
  iconSize?: number;
  isSelected: boolean;
};

export type StepNavigationType = {
  step: number;
  readonly type: string; // This string represents the component name of the step
  readonly title: string;
  readonly subtitle: string;
  isFirst?: boolean;
  isLast?: boolean;
  isCurrentStep?: boolean;
  isCompleted?: boolean;
  parentStep?: number;
  subSteps?: StepNavigationType[];
};

export const DefaultIconName: IconName = "hammer";

export const DEFAULT_ICON_SIZE: number = 20;
