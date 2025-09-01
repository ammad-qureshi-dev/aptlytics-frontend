export default function PageContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="page-container" className="flex flex-col gap-4 border border-[#fbfbfb] p-4 rounded-md shadow-md m-4 h-full min-w-[600px]">
            {children}
        </div>
    )
}