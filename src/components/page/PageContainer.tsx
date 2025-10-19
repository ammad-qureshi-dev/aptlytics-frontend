interface Prop {
    children: React.ReactNode;
    width: string;
}


export default function PageContainer({ children, width = "w-4/5" }: Prop) {
    return (
        <div
            id="page-container"
            className={`
                flex flex-col
                lg:${width} md:w-2/3 sm:w-full
                mx-auto my-10
                rounded-md
                shadow-sm
                bg-[#FBFBFB]
                p-8
                border border-gray-100`}
        >
            {children}
        </div>
    )
}