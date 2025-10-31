import { DynamicIcon } from "lucide-react/dynamic";

type IconName = React.ComponentProps<typeof DynamicIcon>["name"];

export type NavbarItem = {
  label?: string;
  href: string;
  icon?: IconName;
  iconSize?: number;
};
