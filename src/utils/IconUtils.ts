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
      return "bg-blue-200 text-white border border-blue-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "red":
      return "bg-red-200 text-white border border-red-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "green":
      return "bg-green-200 text-white border border-green-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "yellow":
      return "bg-yellow-200 text-white border border-yellow-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "orange":
      return "bg-orange-200 text-white border border-orange-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "purple":
      return "bg-purple-200 text-white border border-purple-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "pink":
      return "bg-pink-200 text-white border border-pink-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "teal":
      return "bg-teal-200 text-white border border-teal-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "indigo":
      return "bg-indigo-200 text-white border border-indigo-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "gray":
      return "bg-gray-200 text-gray-900 border border-gray-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    default:
      return "bg-gray-200 text-gray-900 border border-gray-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
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
