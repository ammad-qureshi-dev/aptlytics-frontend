export function getTextColorBasedOnRole(role: string) {
  switch (role) {
    case "CUSTOMER":
      return "text-indigo-400";
    case "EMPLOYEE":
      return "text-green-400";
    case "OWNER":
      return "text-yellow-400";
    default:
      return "text-gray-400";
  }
}

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
    case "purple":
      return "text-purple-500";
    default:
      return "text-black";
  }
}

export function getPillColor(color: string) {
  switch (color.toLowerCase()) {
    case "red":
      return "bg-red-100 text-red-800";
    case "blue":
      return "bg-blue-100 text-blue-800";
    case "green":
      return "bg-green-100 text-green-800";
    case "yellow":
      return "bg-yellow-100 text-yellow-800";
    case "purple":
      return "bg-purple-100 text-purple-800";
    case "orange":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export function getIconBackgroundColor(iconColor: string) {
  switch (iconColor) {
    case "blue":
      return "bg-blue-100 text-white border border-blue-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "red":
      return "bg-red-200 text-white border border-red-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "green":
      return "bg-green-100 text-white border border-green-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "yellow":
      return "bg-yellow-100 text-white border border-yellow-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "orange":
      return "bg-orange-100 text-white border border-orange-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "purple":
      return "bg-purple-100 text-white border border-purple-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "pink":
      return "bg-pink-100 text-white border border-pink-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "teal":
      return "bg-teal-100 text-white border border-teal-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "indigo":
      return "bg-indigo-100 text-white border border-indigo-500 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    case "gray":
      return "bg-gray-100 text-gray-900 border border-gray-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
    default:
      return "bg-gray-100 text-gray-900 border border-gray-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200";
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

export function getRoleColor(role: string) {
  switch (role) {
    case "CUSTOMER":
      return "blue";
    case "EMPLOYEE":
      return "green";
    case "OWNER":
      return "yellow";
    default:
      return "gray";
  }
}
