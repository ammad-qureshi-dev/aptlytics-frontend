import type { DynamicIcon } from "lucide-react/dynamic";

type IconName = React.ComponentProps<typeof DynamicIcon>["name"];

export type NavItemType = {
  href: string;
  label: string;
  icon?: IconName;
  iconSize?: number;
};

export const DefaultIconName: IconName = "hammer";

export const DEFAULT_ICON_SIZE: number = 20;
