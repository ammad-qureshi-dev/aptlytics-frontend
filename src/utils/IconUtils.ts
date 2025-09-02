export function getIconColor(iconColor: string | undefined) {
  if (!iconColor) {
    return "text-black";
  }

  switch (iconColor) {
    case "blue":
      return "text-blue-500";
    case "red":
      return "text-red-500";
    case "green":
      return "text-green-500";
    case "yellow":
      return "text-yellow-500";
    case "orange":
      return "text-orange-500";
    default:
      return "text-black";
  }
}

export function getIconBackgroundColor(iconColor: string) {
  switch (iconColor) {
    case "blue":
      return "bg-blue-100 border border-blue-100";
    case "red":
      return "bg-red-100 border border-red-100";
    case "green":
      return "bg-green-100 border border-green-100";
    case "yellow":
      return "bg-yellow-100 border border-yellow-100";
    case "orange":
      return "bg-orange-100 border border-orange-100";
    default:
      return "bg-black";
  }
}

export function getColorByAlertType(type: string | undefined) {
  if (!type) {
    return "black";
  }

  switch (type) {
    case "error":
      return "red";
    case "info":
      return "blue";
    case "warning":
      return "yellow";
    case "success":
      return "green";
    default:
      return "black";
  }
}
