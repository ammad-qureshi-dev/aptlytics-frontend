import { DynamicIcon } from "lucide-react/dynamic";

type Icon = React.ComponentProps<typeof DynamicIcon>["name"];

export type PageCardType = {
  title: string;
  icon: Icon;
  type: "error" | "info" | "warning" | "success" | "none";
  iconColor: string;
  iconSize?: number;
  data: any;
  extra?: any;
  redirectTo?: string;
};

export type ServiceCardType = {
  name: string;
  description?: string;
  price: number;
  time: number;
  serviceLength: "MINUTE" | "HOUR" | "DAY" | "WEEK";
};
