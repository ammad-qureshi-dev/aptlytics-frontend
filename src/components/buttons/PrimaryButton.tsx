'use client'

import { DynamicIcon } from "lucide-react/dynamic";
import { IconName } from "../navigation/Types";
import { motion } from "framer-motion";


interface Prop {
    label: string;
    onClick?: (val: any) => void;
    isFullWidth?: boolean;
    icon?: IconName;
    type: "submit" | "button" | "reset";
}

export default function PrimaryButton({
    label,
    onClick,
    icon,
    isFullWidth,
    type,
}: Prop) {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            whileTap={{ scale: 0.9, rotate: "-1deg" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`
        ${isFullWidth ? "w-full" : "w-36"} h-12
        flex flex-row justify-center items-center gap-2
        rounded-md border
        bg-[#FF7B00] border-[#FF7B00]
        text-white font-medium text-xl
        cursor-pointer transition-all
        hover:shadow-md hover:-translate-y-0.5 hover:bg-[#f77700]
        active:-translate-y-1
      `}
        >
            {icon && <DynamicIcon name={icon} size={24} />}
            <span>{label}</span>
        </motion.button>
    );
}
