import { Telescope } from "lucide-react";

export default function DefaultLogo() {
    return (
        <div className="flex flex-row gap-2 items-center mx-4">
            <Telescope size={28} className="text-[#FF7B00]" />
            <span className="text-xl font-semibold text-[#FF7B00]">Aptlytics</span>
        </div>
    );
}