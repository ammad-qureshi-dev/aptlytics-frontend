export default function PageContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="page-container" className="flex flex-col border border-[#e8e8e8] bg-[#f7f7f7] p-8 rounded-md shadow-md m-4">
            {children}
        </div>
    )
}