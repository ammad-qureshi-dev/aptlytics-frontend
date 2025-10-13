export default function PageContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="page-container" className="flex flex-col 
    w-4/5 
    mx-auto my-10 
    bg-[#FBFBFB]
    rounded-md
    shadow-sm 
    p-8 
    border border-gray-100">
            {children}
        </div>
    )
}