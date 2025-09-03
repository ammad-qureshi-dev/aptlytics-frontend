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

export const DefaultIconName: IconName = "hammer";

export const DEFAULT_ICON_SIZE: number = 20;
