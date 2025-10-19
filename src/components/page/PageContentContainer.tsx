interface Prop {
    children: React.ReactNode;
}

export default function PageContentContainer({ children }: Prop) {
    return (
        <>
            <div id="page-content-container" className="flex flex-col gap-2 my-4">
                {children}
            </div>
        </>
    )
}