'use client'

import { motion } from "framer-motion"

interface Prop {
    children: React.ReactNode;
    width?: string;
    height?: string;
    css?: string;
}

export default function PageContainer({ children, width = "w-5/6", height = "h-full", css }: Prop) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}

            transition={{
                ease: "easeOut",
                duration: 0.5,
                type: "spring",
                bounce: 0.1,
            }}
            className={`
        ${width}
        ${height}
        flex flex-col
        rounded-md
        shadow-sm
        bg-[#FBFBFB]
        my-8
        p-8
        border border-gray-100
        ${css}`}
        >
            {children}
        </motion.div>
    );
}
