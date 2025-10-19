interface Prop {
    label: string;
    onClick?: (val: any) => void;
    isFullWidth?: boolean;
    type: "submit" | "reset" | "button"
}

export default function SecondaryButton({ label, onClick, isFullWidth, type }: Prop) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                ${isFullWidth ? "w-full" : "w-36"} 
                h-12
                border-3
                py-2 px-4
                flex flex-row
                justify-center items-center gap-2
                rounded-md
                bg-gray-50
                border-[#FF7B00]
                text-[#FF7B00]
                cursor-pointer
                transition-all
                hover:shadow-md
                hover:-translate-y-0.5
                hover:bg-[#fffaf5]
                active:-translate-y-1
                `}>
            <span className="text-lg font-medium">{label}</span>
        </button>
    )
}