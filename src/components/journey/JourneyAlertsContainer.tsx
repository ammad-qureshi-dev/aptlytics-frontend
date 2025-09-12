import { ResponseData } from "@/server/Types";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface JourneyAlertsContainerProp {
    alerts: ResponseData[];
}

export default function JourneyAlertsContainer({ alerts }: JourneyAlertsContainerProp) {
    return (
        <div id="journey-alerts-container" className="my-4">
            <ul className="flex flex-row">
                {
                    alerts?.map((alert, key) => {
                        return (
                            <li key={key} className="flex flex-row items-center justify-center gap-4 border border-gray-200 p-2 rounded-md shadow-md">
                                <DynamicIcon name={getIcon(alert.responseSeverity)} className={`rounded-lg w-12 h-12 p-2 text-white ${getColor(alert.responseSeverity)}`} size={24} />
                                <span>{alert.description}</span>
                            </li>
                        )
                    })
                }
            </ul >
        </div>
    )
}

function getIcon(severity: string): IconName {
    switch (severity) {
        case "ERROR": return "circle-alert";
        case "WARNING": return "triangle-alert";
        default: return "info"
    }
}

function getColor(severity: string) {
    switch (severity) {
        case "ERROR": return "bg-red-400";
        case "WARNING": return "bg-yellow-400";
        case "INFO": return "bg-blue-400";
        default: throw new Error(severity + " not supported");
    }
}
